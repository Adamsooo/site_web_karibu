{/* Carte sombre de présentation des membres du bureau */}

export const CarteMembre = ({ image, nom }) => {
    return (
        <div className="flex flex-col justify-between shrink-0
        w-72
        rounded-2xl border border-amber-700
        p-5 shadow-xl
        transition-all duration-300
        hover:scale-105 hover:shadow-2xl
        ">

        {/* Image */}
        <div className="w-full aspect-4/5 overflow-hidden rounded-md">
            <img
            src={image}
            alt={`Photo de ${nom}, membre du bureau de Karibu UGE`}
            width="640"
            height="800"
            loading="lazy"
            className="w-full h-full object-cover
                        border-2 border-amber-700 rounded-md"
            />
        </div>

        </div>
    );
};

export default CarteMembre;
