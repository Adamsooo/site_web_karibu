import { useRef, useState } from "react";
import { TitrePrincipal } from "../TitrePrincipal.jsx";
import { photos } from "../../data/photos.js";

// Cadre d'une photo, dans le style des cartes événements
const Cadre = ({ photo, masque = false }) => (
    <figure
        aria-hidden={masque || undefined}
        className="shrink-0 w-64 md:w-72 rounded-2xl border border-amber-200 p-3 shadow-xl
                   transition-transform duration-300 hover:scale-105"
    >
        <img
            src={photo.miniature}
            alt={masque ? "" : photo.legende}
            width="496"
            height="360"
            loading="lazy"
            className="w-full aspect-[31/22] object-cover rounded-md border-2 border-amber-200"
        />
        <figcaption className="mt-2 text-center text-sm font-ubuntu text-amber-100 truncate">
            {photo.legende}
        </figcaption>
    </figure>
);

export const Phototheque = () => {
    const [ouvert, setOuvert] = useState(false);
    // La galerie complète n'est chargée qu'au premier clic, puis gardée pour l'animation de fermeture
    const [dejaOuvert, setDejaOuvert] = useState(false);
    const sectionRef = useRef(null);

    const basculer = () => {
        if (ouvert) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
            setDejaOuvert(true);
        }
        setOuvert(!ouvert);
    };

    return (
        <section id="phototheque"
                 ref={sectionRef}
                 className="flex flex-col gap-8 py-5 md:py-10
                            bg-linear-to-r from-amber-950 to-amber-800
                            scroll-mt-20 md:scroll-mt-24">
            <div className="px-5 md:px-10">
                <TitrePrincipal titre="Photothèque" variant="clair" />
            </div>

            {/* Bandeau qui défile en boucle : la liste est doublée pour que la boucle soit invisible.
                Pause au survol ; défilement manuel si l'utilisateur a demandé moins d'animations. */}
            <div className="group overflow-hidden motion-reduce:overflow-x-auto
                            mask-[linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                <div className="flex w-max py-4 animate-defilement group-hover:[animation-play-state:paused]
                                motion-reduce:animate-none">
                    {[...photos, ...photos].map((photo, i) => (
                        <div key={i} className="pr-6">
                            <Cadre photo={photo} masque={i >= photos.length} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center px-5">
                <button
                    type="button"
                    onClick={basculer}
                    aria-expanded={ouvert}
                    aria-controls="galerie-complete"
                    className="btn-primary hover:scale-105"
                >
                    {ouvert ? "Masquer les photos" : "Voir toutes les photos"}
                </button>
            </div>

            {/* Galerie complète : se déroule sous le bouton */}
            <div
                id="galerie-complete"
                className={`grid transition-[grid-template-rows] duration-700 ease-in-out
                            ${ouvert ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
                <div className="overflow-hidden">
                    {dejaOuvert && (
                        <ul className={`columns-1 sm:columns-2 lg:columns-3 gap-6 px-5 md:px-10 pb-5
                                        transition-opacity duration-700 ${ouvert ? "opacity-100" : "opacity-0"}`}>
                            {photos.map((photo) => (
                                <li key={photo.src} className="mb-6 break-inside-avoid">
                                    <figure className="rounded-2xl border border-amber-200 p-3 shadow-xl">
                                        <img
                                            src={photo.src}
                                            alt={photo.legende}
                                            loading="lazy"
                                            className="w-full h-auto rounded-md"
                                        />
                                        <figcaption className="mt-2 text-center text-sm font-ubuntu text-amber-100">
                                            {photo.legende}
                                        </figcaption>
                                    </figure>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
};
