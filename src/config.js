/* Informations centrales du site : à modifier ici uniquement.
   (Les balises <head> des fichiers .html, public/sitemap.xml et public/robots.txt
   reprennent aussi l'URL du site : pensez à les mettre à jour en cas de changement de domaine.) */

export const SITE_URL = "https://assokaribu.com";

export const LIENS = {
    adhesion: "https://www.helloasso.com/associations/karibu-uge/adhesions/formulaire-adhesion",
    recrutement: "https://forms.gle/Jf7CxkoLkpqyAP2M7",
    instagram: "https://www.instagram.com/karibu_uge/",
    linkedin: "https://fr.linkedin.com/company/karibu-uge",
    linktree: "https://linktr.ee/karibu_uge",
    whatsapp: "https://wa.me/33768289412?text=Bonjour%2C%20j%27ai%20vu%20l%27association%20Karibu%20sur%20insta%2C%20qu%27est-ce%20que%20vous%20faites%20concr%C3%A8tement%20et%20comment%20l%27int%C3%A9gre-t-on%20%3F",
};

// Source : Répertoire national des associations / Annuaire des Entreprises (data.gouv.fr)
export const ASSOCIATION = {
    nom: "Karibu UGE",
    forme: "Association loi 1901",
    rna: "W771022255",
    siren: "942 059 221",
    siege: "5 boulevard Descartes, 77420 Champs-sur-Marne",
    email: "karibu.uge@gmail.com",
    directeurPublication: "[À COMPLÉTER : Prénom Nom], président·e de l'association",
};

export const HEBERGEUR = {
    nom: "Vercel Inc.",
    adresse: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    site: "https://vercel.com",
};

// Liens de navigation, partagés par la navbar, le menu mobile et le footer
export const NAVIGATION = [
    { href: "/#home", label: "Accueil" },
    { href: "/#evenements", label: "Événements" },
    { href: "/#equipe", label: "Notre équipe" },
    { href: "/#nouscontacter", label: "Nous contacter" },
    { href: LIENS.adhesion, label: "Adhérer" },
];
