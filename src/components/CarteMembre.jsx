{/* Carte sombre de présentation des membres du bureau */}

import { useState } from "react";

export const CarteMembre = ({ image, title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={`flex flex-col justify-between
            w-full max-w-2xs min-w-xs
            rounded-2xl border border-amber-900 
            p-5 shadow-xl
            transition-all duration-300
            hover:scale-105 hover:shadow-2xl
            ${isOpen ? "h-auto" : "h-[350px]"}
        `}>

            {/* Image avec taille fixée */}
            <div className="w-full h-[280px] overflow-hidden rounded-md ">
                <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover border-2 border-amber-900 rounded-md"
                />
            </div>

            {/* Titre */}
            <h1 className="text-2xl text-center font-ubuntu-bold text-amber-900 ">
                {title}
            </h1>

            {/* Description tronquée */}
            <p className={`text-sm text-amber-800 font-raleway
                ${isOpen ? "" : "line-clamp-2"}
            `}>
                {description}
            </p>
        </div>
    );
};

export default CarteMembre;
