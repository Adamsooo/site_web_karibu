import CarteClaire from '../CarteClaire.jsx';
import { TitrePrincipal } from "../TitrePrincipal.jsx";

export const Evenements = () => {
    return ( 
    <section className="flex flex-col gap-10 p-5 
                        bg-linear-to-l from-amber-700 to-amber-950
                        md:p-10">
        <TitrePrincipal titre="Nos événements..." variant="clair" />
        <div className="overflow-x-auto whitespace-nowrap flex flex-row justify-start w-full px-5 py-5 gap-6">
            <CarteClaire
                image="/Events/BBQ Affiches officielles (Votre story) (1).png"
                title="BBQ de Karibu"
                description="Notre événement de clôture du dernier mandat a été un franc succès ! Un grand merci à tous les participants qui ont rendu cette journée mémorable. Entre les délicieuses grillades, les jeux amusants et les moments de partage, nous avons créé des souvenirs inoubliables ensemble. Restez connectés pour nos prochains événements !"
                buttonText="En savoir plus"
                link="https://www.instagram.com/p/DMSVIEwst7K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            />
            <CarteClaire
                image="/Events/Conference.png"
                title="Conférence JEE"
                description="Notre première conférence organisée à ESIEE Paris"
                buttonText="En savoir plus"
                link="https://www.instagram.com/karibu_uge/p/DJvmw-eMSU6/"
            />
        </div>
    </section>
    )
};