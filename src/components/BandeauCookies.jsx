{/* Bandeau de consentement : "Accepter" et "Refuser" ont le même poids visuel (exigence CNIL) */}

import { enregistrerConsentement } from "../consentement";

export const BandeauCookies = () => {
    return (
        <div
            role="dialog"
            aria-live="polite"
            aria-label="Consentement aux cookies"
            className="fixed bottom-4 inset-x-4 z-50 mx-auto max-w-2xl
                       flex flex-col gap-4 md:flex-row md:items-center
                       rounded-2xl border border-amber-200 bg-amber-950/95 p-5 shadow-2xl
                       text-amber-100 font-raleway text-sm"
        >
            <p className="flex-1">
                Nous aimerions mesurer l'audience du site (pages vues, performances) avec
                Vercel Analytics, un outil sans cookie publicitaire. Vous pouvez accepter ou refuser,
                et changer d'avis à tout moment via « Gérer les cookies » en bas de page.{" "}
                <a href="/politique-de-confidentialite" className="underline hover:text-amber-300">
                    En savoir plus
                </a>
            </p>
            <div className="flex gap-3 shrink-0">
                <button
                    onClick={() => enregistrerConsentement("refuse")}
                    className="flex-1 rounded-xl border-2 border-amber-200 px-4 py-2 font-ubuntu-bold text-amber-100
                               cursor-pointer transition-colors hover:bg-amber-200 hover:text-amber-950"
                >
                    Refuser
                </button>
                <button
                    onClick={() => enregistrerConsentement("accepte")}
                    className="flex-1 rounded-xl border-2 border-amber-200 px-4 py-2 font-ubuntu-bold text-amber-100
                               cursor-pointer transition-colors hover:bg-amber-200 hover:text-amber-950"
                >
                    Accepter
                </button>
            </div>
        </div>
    );
};

export default BandeauCookies;
