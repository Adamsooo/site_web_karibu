{/* Carte claire sur fond sombre qui sert
    à présenter (jusqu'à maintenant) nos événements */}

import BoutonPrimaire from "./BoutonPrimaire";

export const CarteClaire = ({image, 
                            title, 
                            description, 
                            link 
                            }) => {
                            
  return (
    <div className="flex flex-col justify-between
      w-full max-w-2xs min-w-xs
      rounded-2xl border border-amber-200 
      p-5 shadow-xl
      transition-all duration-300
      hover:scale-105 hover:shadow-2xl
      max-h-2xs min-h-xs
      overflow-hidden
    ">

      {/* Image */}
      <div className="w-full h-[180px] overflow-hidden rounded-md">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover 
                     border-2 border-amber-200 rounded-md"
        />
      </div>

      {/* Titre */}
      <h1 className="text-2xl text-center font-ubuntu-bold text-amber-200 truncate">
        {title}
      </h1>

      {/* Description limitée */}
      <div>
        <p className="text-sm text-center text-amber-100 font-raleway line-clamp-5">
          {description}
        </p>
      </div>

      {/* Bouton redirection */}
      <div className="flex justify-center mt-4">
        <BoutonPrimaire onClick={() => window.open(link, "_blank")}>
          En savoir plus
        </BoutonPrimaire>
      </div>

    </div>
  );
};

export default CarteClaire;
