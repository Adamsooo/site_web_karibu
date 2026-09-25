/* Consentement aux traceurs (mesure d'audience).
   Le choix est gardé 6 mois dans le navigateur, comme le recommande la CNIL. */

import { useEffect, useState } from "react";

const CLE = "karibu-consentement";
const DUREE_VALIDITE = 1000 * 60 * 60 * 24 * 182; // ~6 mois
const EVENEMENT = "karibu:consentement";

// "accepte" | "refuse" | null (pas encore de choix ou choix expiré)
export const lireConsentement = () => {
    try {
        const { choix, date } = JSON.parse(localStorage.getItem(CLE));
        return Date.now() - date < DUREE_VALIDITE ? choix : null;
    } catch {
        return null;
    }
};

export const enregistrerConsentement = (choix) => {
    try {
        localStorage.setItem(CLE, JSON.stringify({ choix, date: Date.now() }));
    } catch {
        // stockage indisponible (navigation privée) : le choix vaut pour la page en cours
    }
    window.dispatchEvent(new CustomEvent(EVENEMENT, { detail: { choix } }));
};

// Rouvre le bandeau (lien "Gérer les cookies" du footer)
export const rouvrirBandeau = () =>
    window.dispatchEvent(new CustomEvent(EVENEMENT, { detail: { choix: null } }));

export const useConsentement = () => {
    const [choix, setChoix] = useState(lireConsentement);

    useEffect(() => {
        const surChangement = (e) => setChoix(e.detail.choix);
        window.addEventListener(EVENEMENT, surChangement);
        return () => window.removeEventListener(EVENEMENT, surChangement);
    }, []);

    return choix;
};
