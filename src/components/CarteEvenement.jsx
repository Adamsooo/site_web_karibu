{/* Carte claire sur fond sombre qui présente un événement.
    "En savoir plus" ouvre la fenêtre détaillée (ModaleEvenement) */}

import { useRef } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import BoutonPrimaire from "./BoutonPrimaire";
import { estAVenir, formaterDate } from "../data/evenements";

export const CarteEvenement = ({ evenement, onOuvrir }) => {
  const carteRef = useRef(null);
  const date = formaterDate(evenement);
  const aVenir = estAVenir(evenement);

  return (
    <article
      ref={carteRef}
      className="flex flex-col gap-3 shrink-0
        w-72 whitespace-normal
        rounded-2xl border border-amber-200
        p-5 shadow-xl
        transition-all duration-300
        hover:scale-105 hover:shadow-2xl"
    >
      {/* Image + badges */}
      <div className="relative w-full h-[180px] overflow-hidden rounded-md">
        <img
          src={evenement.image.replace("/Events/", "/Events/miniatures/")}
          alt={`Visuel de l'événement ${evenement.titre}`}
          width="496"
          height="360"
          loading="lazy"
          className="w-full h-full object-cover border-2 border-amber-200 rounded-md"
        />
        {aVenir && (
          <span className="absolute top-2 right-2 rounded-full bg-amber-200 px-2 py-0.5
                           text-xs font-ubuntu-bold text-amber-950 shadow">
            À venir
          </span>
        )}
      </div>

      {/* Titre */}
      <h3 className="text-2xl text-center font-ubuntu-bold text-amber-200 truncate">
        {evenement.titre}
      </h3>

      {/* Date et lieu */}
      {(date || evenement.lieu) && (
        <div className="flex flex-col items-center gap-1 text-xs font-ubuntu text-amber-300">
          {date && (
            <span className="flex items-center gap-1.5">
              <FaCalendarAlt aria-hidden="true" /> {date}
            </span>
          )}
          {evenement.lieu && (
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt aria-hidden="true" /> {evenement.lieu}
            </span>
          )}
        </div>
      )}

      {/* Description courte */}
      <p className="text-sm text-center text-amber-100 font-raleway line-clamp-3">
        {evenement.resume}
      </p>

      {/* Ouvre la fenêtre détaillée depuis la position de la carte */}
      <div className="flex justify-center mt-auto pt-2">
        <BoutonPrimaire onClick={(e) => onOuvrir(evenement, carteRef.current.getBoundingClientRect(), e.currentTarget)}>
          En savoir plus
        </BoutonPrimaire>
      </div>
    </article>
  );
};

export default CarteEvenement;
