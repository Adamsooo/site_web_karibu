export const TitrePrincipal = ({ titre, variant = "sombre" }) => {
    // Styles en fonction de la variante
    const variantClasses = variant === "clair"
        ? "text-amber-500"          // sur fond sombre
        : "text-amber-950";         // sur fond clair

    // h2 : le seul h1 de la page d'accueil est dans la section Home
    return (
        <h2 className={`text-6xl md:text-7xl font-peachy-keen ${variantClasses}`}>
            {titre}
        </h2>
    );
};

export default TitrePrincipal;
