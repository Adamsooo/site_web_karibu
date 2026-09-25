/* Règles de validation du formulaire de contact.
   Utilisées à la fois dans le navigateur (messages d'erreur immédiats)
   et dans la fonction serveur api/contact.js (qui ne fait jamais confiance au navigateur). */

export const LIMITES = {
    nom: { min: 2, max: 100 },
    email: { max: 150 },
    message: { min: 10, max: 3000 },
};

// Temps minimum de remplissage : un humain met plus de 3 s à écrire un message
export const DUREE_MIN_MS = 3000;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NB_LIENS_MAX = 3;

// Renvoie { nom?, email?, message? } : un message d'erreur par champ invalide
export const validerContact = ({ nom = "", email = "", message = "" }) => {
    const erreurs = {};
    const n = nom.trim(), e = email.trim(), m = message.trim();

    if (n.length < LIMITES.nom.min) erreurs.nom = "Indiquez votre nom (2 caractères minimum).";
    else if (n.length > LIMITES.nom.max) erreurs.nom = `Le nom ne doit pas dépasser ${LIMITES.nom.max} caractères.`;

    if (!e) erreurs.email = "Indiquez votre adresse e-mail.";
    else if (e.length > LIMITES.email.max || !EMAIL.test(e)) erreurs.email = "Cette adresse e-mail n'est pas valide.";

    if (m.length < LIMITES.message.min) erreurs.message = `Votre message doit faire au moins ${LIMITES.message.min} caractères.`;
    else if (m.length > LIMITES.message.max) erreurs.message = `Votre message ne doit pas dépasser ${LIMITES.message.max} caractères.`;
    else if ((m.match(/https?:\/\//gi) ?? []).length > NB_LIENS_MAX) erreurs.message = "Votre message contient trop de liens.";

    return erreurs;
};
