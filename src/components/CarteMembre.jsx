    {/* Carte sombre de présentation des membres du bureau */}

    import BoutonPrimaire from "./BoutonPrimaire";

    export const CarteMembre = ({image, 
                                title, 
                                description, 
                                link 
                                }) => {
                                
    return (
        <div className="flex flex-col justify-between
        w-full max-w-2xs min-w-xs max-h-2xs min-h-xs
        rounded-2xl border border-amber-700 
        p-5 shadow-xl
        transition-all duration-300
        hover:scale-105 hover:shadow-2xl
        
        ">
            
        {/* Image */}
        <div className="w-full aspect-[4/5] overflow-hidden rounded-md">
            <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover 
                        border-2 border-amber-700 rounded-md"
            />
        </div>

        {/* Titre */}
        {/* <h1 className="text-2xl text-center 
                        font-ubuntu-bold text-amber-950">
            {title}
        </h1> */}

        {/* Description limitée */}
        {/* <p className="text-sm text-amber- font-raleway line-clamp-5">
            {description}
        </p> */}

        {/* Bouton redirection */}
        {/* <div className="flex justify-center mt-4">
            <BoutonPrimaire onClick={() => window.open(link, "_blank")}>
            En savoir plus
            </BoutonPrimaire>
        </div> */}

        </div>
    );
    };

    export default CarteMembre;