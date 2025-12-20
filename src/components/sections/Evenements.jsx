import CarteClaire from '../CarteClaire.jsx';
import { TitrePrincipal } from "../TitrePrincipal.jsx";

export const Evenements = () => {
    return ( 
    <section className="flex flex-col gap-5 p-5 
                        bg-linear-to-l from-amber-700 to-amber-950
                        md:p-10">
        <TitrePrincipal titre="Nos événements..." variant="clair" />
        <div className="overflow-x-auto whitespace-nowrap flex flex-row justify-start w-full px-5 pt-5 pb-10 gap-6">
            <CarteClaire
                image="/Events/FANZONE.png"
                title="FANZONE CAN2025"
                description="Notre FANZONE ouverte à tous les étudiants de l'Université Gustave Eiffel pour suivre ensemble les matchs de la CAN 2025. Une ambiance festive, des écrans géants et des moments de partage inoubliables vous attendent !"
                buttonText="En savoir plus"
                link="https://www.instagram.com/karibu_uge/"
            />
            <CarteClaire
                image="/Events/KaribuSantaSecret.png"
                title="Karibu Santa Secret"
                description="Nous organisons notre Santa Secret annuel pour célébrer la fin de l'année avec nos membres. C'est l'occasion parfaite pour partager des cadeaux, des rires et de la bonne humeur entre amis. Rejoignez-nous pour une soirée mémorable remplie de surprises et de joie festive !"
                buttonText="En savoir plus"
                link="https://wa.me/33768289412?text=Bonjour%2C%20vous%20allez%20bien%2C%20je%20souhaite%20avoir%20plus%20d%27informations%20sur%20le%20Santa%20Secret%20organis%C3%A9%20par%20Karibu%20et%20comment%20y%20participer%20%3F"
            />
            <CarteClaire
                image="/Events/BBQ.png"
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
            <CarteClaire
                image="/Events/SalonMondeArabe.JPG"
                title="Salon du monde Arabe"
                description="Nous étions au salon du monde Arabe à Montrouge pour représenter les cultures africaines et échanger avec d'autres associations culturelles."
                buttonText="En savoir plus"
                link="https://www.instagram.com/karibu_uge/p/DJvmw-eMSU6/"
            />
            <CarteClaire
                image="/Events/Story avec l'Épicerie Solidaire.png"
                title="Collecte w/ l'Épicerie Solidaire"
                description="C'est un rituiel pour nous de participer aux collectes de l'Épicerie Solidaire de l'Université Gustave Eiffel. Merci à tous ceux qui ont contribué à cette belle initiative de solidarité étudiante !"
                buttonText="En savoir plus"
                link="https://fr.linkedin.com/posts/karibu-uge_solidarit%C3%A9%C3%A9tudiante-engagementassociatif-activity-7291820045951746049-iFMK?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy"
            />
        </div>
    </section>
    )
};