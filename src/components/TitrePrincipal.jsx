export const TitrePrincipal = ({ titre, variant = "sombre" }) => {
    // Styles en fonction de la variante
    const variantClasses = variant === "clair"
        ? "text-amber-500"          // sombre
        : "text-amber-950";         // clair

    return (
        <h1 className={`text-6xl font-peachy-keen ${variantClasses}`}>
            {titre}
        </h1>
    );
};

export default TitrePrincipal;
