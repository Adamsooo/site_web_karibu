{/* Carte de présentation d'un membre du bureau : photo, prénom, statut */}

// miseEnAvant : carte un peu plus grande pour la présidence
export const CarteMembre = ({ membre, miseEnAvant = false }) => {
    const { prenom, statut, photo } = membre;

    return (
        <article className={`flex flex-col gap-3 shrink-0
        ${miseEnAvant ? "w-72 md:w-80 border-2" : "w-64 md:w-72 border"}
        rounded-2xl border-amber-700
        p-5 shadow-xl
        transition-all duration-300
        hover:scale-105 hover:shadow-2xl`}>

        {/* Photo */}
        <div className="w-full aspect-4/5 overflow-hidden rounded-md">
            <img
            src={photo}
            alt={`Photo de ${prenom}${statut ? `, ${statut.toLowerCase()}` : ""} de Karibu UGE`}
            width="640"
            height="800"
            loading="lazy"
            className="w-full h-full object-cover
                        border-2 border-amber-700 rounded-md"
            />
        </div>

        {/* Prénom : même typo que les titres des cartes événements */}
        <h3 className="text-2xl text-center font-ubuntu-bold text-amber-950 truncate">
            {prenom}
        </h3>

        {/* Statut dans l'association */}
        {statut && (
            <p className="-mt-2 text-sm text-center font-raleway font-medium text-amber-900 truncate">
                {statut}
            </p>
        )}

        </article>
    );
};

export default CarteMembre;
