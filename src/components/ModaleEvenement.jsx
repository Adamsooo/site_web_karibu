{/* Fenêtre détaillée d'un événement.
    Elle se déploie depuis la carte cliquée (origine) et s'y replie à la fermeture */}

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { estAVenir, formaterDate } from "../data/evenements";

const DUREE = 450; // ms

const mouvementReduit = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const ModaleEvenement = ({ evenement, origine, onFermer }) => {
  const panneauRef = useRef(null);
  const boutonFermerRef = useRef(null);
  const fermetureEnCours = useRef(false);
  const [visible, setVisible] = useState(false);
  const titreId = useId();

  const date = formaterDate(evenement);
  const aVenir = estAVenir(evenement);

  // Transform qui superpose le panneau à la carte d'origine
  const transformVersOrigine = () => {
    const panneau = panneauRef.current;
    if (!origine || !panneau || mouvementReduit()) return "";
    panneau.style.transform = ""; // mesure de la position finale, sans transform en cours
    const fin = panneau.getBoundingClientRect();
    const dx = origine.left + origine.width / 2 - (fin.left + fin.width / 2);
    const dy = origine.top + origine.height / 2 - (fin.top + fin.height / 2);
    const echelle = origine.width / fin.width;
    return `translate(${dx}px, ${dy}px) scale(${echelle})`;
  };

  // Ouverture : on part de la carte puis on anime vers la position finale
  useLayoutEffect(() => {
    const panneau = panneauRef.current;
    panneau.style.transition = "none";
    panneau.style.transform = transformVersOrigine();
    panneau.getBoundingClientRect(); // force le navigateur à appliquer la position de départ

    // setTimeout plutôt que requestAnimationFrame : s'exécute même si l'onglet ne se redessine pas
    const minuteur = setTimeout(() => {
      panneau.style.transition =
        `transform ${DUREE}ms cubic-bezier(0.2, 0.9, 0.3, 1), opacity 250ms ease-out`;
      panneau.style.transform = "";
      setVisible(true);
    }, 16);
    return () => clearTimeout(minuteur);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fermer = () => {
    if (fermetureEnCours.current) return;
    fermetureEnCours.current = true;
    panneauRef.current.style.transform = transformVersOrigine();
    setVisible(false);
    setTimeout(onFermer, mouvementReduit() ? 250 : DUREE);
  };

  const fermerRef = useRef(fermer);
  fermerRef.current = fermer;

  // Bloque le défilement de la page, ferme avec Échap
  useEffect(() => {
    const overflowPrecedent = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    boutonFermerRef.current?.focus({ preventScroll: true });

    const surTouche = (e) => e.key === "Escape" && fermerRef.current();
    window.addEventListener("keydown", surTouche);
    return () => {
      document.body.style.overflow = overflowPrecedent;
      window.removeEventListener("keydown", surTouche);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Arrière-plan flouté et assombri */}
      <div
        onClick={fermer}
        aria-hidden="true"
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm
                    transition-opacity duration-300
                    ${visible ? "opacity-100" : "opacity-0"}`}
      />

      <div
        ref={panneauRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titreId}
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto
                    rounded-2xl border border-amber-200 shadow-2xl
                    bg-linear-to-br from-amber-800 to-amber-950
                    ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <button
          ref={boutonFermerRef}
          onClick={fermer}
          aria-label="Fermer"
          className="absolute top-3 right-3 z-10 flex items-center justify-center
                     w-10 h-10 rounded-full bg-black/50 text-3xl leading-none text-amber-100
                     cursor-pointer transition-transform hover:scale-110
                     focus-visible:outline-2 focus-visible:outline-amber-200"
        >
          &times;
        </button>

        {/* Image */}
        <img
          src={evenement.image}
          alt={`Visuel de l'événement ${evenement.titre}`}
          className="w-full aspect-video max-h-[45vh] object-cover border-b border-amber-200"
        />

        <div className="flex flex-col gap-6 p-6 md:p-8">
          {/* Titre */}
          <h2 id={titreId} className="text-4xl md:text-5xl font-peachy-keen text-amber-200">
            {evenement.titre}
          </h2>

          <div className="grid gap-6 md:grid-cols-[180px_1fr]">
            {/* Date et lieu, à gauche en petit */}
            {(date || evenement.lieu) && (
              <dl className="flex flex-col gap-4 text-sm font-ubuntu text-amber-300
                             md:border-r md:border-amber-200/30 md:pr-6">
                {date && (
                  <div>
                    <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-200/70">
                      <FaCalendarAlt aria-hidden="true" /> Date
                    </dt>
                    <dd className="mt-1 text-amber-100">{date}</dd>
                  </div>
                )}
                {evenement.lieu && (
                  <div>
                    <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-200/70">
                      <FaMapMarkerAlt aria-hidden="true" /> Lieu
                    </dt>
                    <dd className="mt-1 text-amber-100">{evenement.lieu}</dd>
                  </div>
                )}
              </dl>
            )}

            {/* Description complète, à droite */}
            <p className={`font-raleway text-amber-100 leading-relaxed whitespace-pre-line
                           ${date || evenement.lieu ? "" : "md:col-span-2"}`}>
              {evenement.description}
            </p>
          </div>

          {/* Action : inscription pour un événement à venir, sinon lien vers le post */}
          <div className="flex justify-center">
            {aVenir && evenement.lienInscription ? (
              <a href={evenement.lienInscription} target="_blank" rel="noopener noreferrer"
                 className="btn-primary text-amber-950">
                Je m'inscris
              </a>
            ) : aVenir ? (
              <span className="btn-primary text-amber-950 opacity-60 hover:opacity-60 cursor-default!">
                Inscriptions bientôt ouvertes
              </span>
            ) : evenement.lien ? (
              <a href={evenement.lien} target="_blank" rel="noopener noreferrer"
                 className="btn-primary text-amber-950">
                Revoir l'événement
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModaleEvenement;
