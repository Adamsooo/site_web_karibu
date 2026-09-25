/* Fonction serveur Vercel : reçoit le formulaire de contact et l'envoie via l'API REST d'EmailJS.
   Les identifiants EmailJS restent côté serveur (variables d'environnement Vercel),
   ils n'apparaissent plus dans le code envoyé au navigateur.

   Variables d'environnement à définir dans Vercel (Settings → Environment Variables) :
   EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY */

import { validerContact, DUREE_MIN_MS } from "../src/lib/validationContact.js";

const ORIGINES_AUTORISEES = [
    /^https:\/\/(www\.)?assokaribu\.com$/,
    /^https:\/\/[a-z0-9-]+\.vercel\.app$/,   // déploiements de prévisualisation
    /^http:\/\/localhost(:\d+)?$/,           // développement (vercel dev)
];

// Limite d'envoi par adresse IP. En mémoire : réinitialisée quand la fonction redémarre,
// suffisant pour freiner un robot insistant sans base de données.
const FENETRE_MS = 60 * 60 * 1000;
const ENVOIS_MAX = 5;
const envoisParIp = new Map();

const tropDEnvois = (ip) => {
    const maintenant = Date.now();
    const recents = (envoisParIp.get(ip) ?? []).filter((t) => maintenant - t < FENETRE_MS);
    recents.push(maintenant);
    envoisParIp.set(ip, recents);
    return recents.length > ENVOIS_MAX;
};

export default async function handler(req, res) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ erreur: "Méthode non autorisée." });
    }

    const origine = req.headers.origin ?? "";
    if (!ORIGINES_AUTORISEES.some((r) => r.test(origine))) {
        return res.status(403).json({ erreur: "Origine non autorisée." });
    }

    const { nom, email, message, site_web, duree } = req.body ?? {};

    // Anti-spam : champ piège rempli ou formulaire rempli trop vite -> on ignore sans le dire
    if (site_web || typeof duree !== "number" || duree < DUREE_MIN_MS) {
        return res.status(200).json({ ok: true });
    }

    const ip = (req.headers["x-forwarded-for"] ?? "").split(",")[0].trim() || "inconnue";
    if (tropDEnvois(ip)) {
        return res.status(429).json({ erreur: "Trop de messages envoyés. Réessayez dans une heure." });
    }

    const erreurs = validerContact({ nom, email, message });
    if (Object.keys(erreurs).length > 0) {
        return res.status(400).json({ erreur: "Formulaire invalide.", champs: erreurs });
    }

    const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY } = process.env;
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY || !EMAILJS_PRIVATE_KEY) {
        console.error("Variables d'environnement EmailJS manquantes");
        return res.status(500).json({ erreur: "Service d'envoi non configuré." });
    }

    const reponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            accessToken: EMAILJS_PRIVATE_KEY,
            template_params: {
                from_name: nom.trim(),
                from_email: email.trim(),
                message: message.trim(),
            },
        }),
    });

    if (!reponse.ok) {
        console.error("Erreur EmailJS", reponse.status, await reponse.text());
        return res.status(502).json({ erreur: "L'envoi a échoué." });
    }

    return res.status(200).json({ ok: true });
}
