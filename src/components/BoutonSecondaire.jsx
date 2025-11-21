export const BoutonSecondaire = ({ children, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className="text-xl font-ubuntu 
                       border-2 border-amber-800 
                       rounded-2xl hover:opacity-70 hover:scale-105 hover:shadow-2xl 
                       hover:cursor-pointer hover:transition-all px-5 py-2 shadow"
        >
            {children}
        </button>
    )
}

export default BoutonSecondaire;