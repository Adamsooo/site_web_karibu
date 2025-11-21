export const BoutonPrimaire = ({ children, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className="text-xl 
            font-ubuntu border-2 
            border-amber-800 hover:opacity-70 
            hover:cursor-pointer hover:transition-all hover:scale-105 hover:shadow-2xl 
            rounded-2xl bg-linear-to-r from-amber-200 to-amber-800 
            px-5 py-2 shadow"
        >
            {children}
        </button>
    )
}

export default BoutonPrimaire;