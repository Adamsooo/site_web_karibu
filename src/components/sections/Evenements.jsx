import { useRef, useState } from "react";
import CarteEvenement from "../CarteEvenement.jsx";
import ModaleEvenement from "../ModaleEvenement.jsx";
import { TitrePrincipal } from "../TitrePrincipal.jsx";
import { evenements, trierEvenements } from "../../data/evenements.js";

const evenementsTries = trierEvenements(evenements);

export const Evenements = () => {
    // { evenement, origine } de l'événement ouvert, null si aucun
    const [ouvert, setOuvert] = useState(null);
    const declencheurRef = useRef(null);

    const ouvrir = (evenement, origine, declencheur) => {
        declencheurRef.current = declencheur;
        setOuvert({ evenement, origine });
    };

    const fermer = () => {
        setOuvert(null);
        declencheurRef.current?.focus({ preventScroll: true });
    };

    return (
    <section id="evenements"
             className="flex flex-col gap-5 p-5
                        bg-linear-to-l from-amber-700 to-amber-950
                        scroll-mt-20
                        md:p-10 md:scroll-mt-24">
        <TitrePrincipal titre="Nos événements..." variant="clair" />
        <div className="overflow-x-auto flex flex-row justify-start w-full px-5 pt-5 pb-10 gap-6">
            {evenementsTries.map((evenement) => (
                <CarteEvenement key={evenement.titre} evenement={evenement} onOuvrir={ouvrir} />
            ))}
        </div>

        {ouvert && (
            <ModaleEvenement
                evenement={ouvert.evenement}
                origine={ouvert.origine}
                onFermer={fermer}
            />
        )}
    </section>
    )
};
