export const BoutonPrimaire = ({ children, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="btn-primary hover:scale-105 hover:shadow-2xl"
        >
            {children}
        </button>
    )
}

export default BoutonPrimaire;
