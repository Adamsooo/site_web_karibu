{/* Gabarit des pages de texte (mentions légales, confidentialité) */}

export const PageTexte = ({ titre, miseAJour, children }) => {
    return (
        <article className="min-h-screen bg-linear-to-r from-amber-50 to-amber-100 text-amber-950
                            px-5 pt-32 pb-16 md:pt-40">
            <div className="mx-auto max-w-3xl font-raleway leading-relaxed
                            [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-ubuntu-bold
                            [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-ubuntu-bold
                            [&_p]:mb-3 [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1
                            [&_a]:underline [&_a]:text-amber-800 [&_a:hover]:text-amber-600">
                <h1 className="text-5xl md:text-6xl font-peachy-keen text-amber-900">{titre}</h1>
                {miseAJour && <p className="text-sm text-amber-800">Dernière mise à jour : {miseAJour}</p>}
                {children}
            </div>
        </article>
    );
};

export default PageTexte;
