import { BoutonPrimaire } from "../BoutonPrimaire.jsx";
import { TitreHero } from "../TitreHero.jsx";

export const Home = () => {
    return <section id="home" 
                    className="flex flex-col pt-22 px-1 justify-center items-center 
                               text-center bg-linear-to-r from-amber-100 to-amber-500 bg-amber-50 
                               gap-5
                               scroll-mt-24
                               md:pt-16">
        <div className="flex md:flex-row flex-col items-center">
          <div>
            <TitreHero titre="Bienvenue chez"/>
          </div>
          <div>
            <img src="LogoKaribuOriginal.png" 
                 alt="Logo Karibu Original" 
                 className="ml-2 w-48 h-48
                            md:w-80 md:h-80 md:mt-8" />
          </div>
        </div>
        <h2 className="font-ubuntu text-3xl md:text-4xl">La 1ère asso <span className="font-ubuntu-italic">afro</span> de l’Université Gustave Eiffel.</h2>
        <p className="font-raleway text-xl md:text-2xl md:max-w-xl text-center">
         Nous accueillons les étudiants africains (mais pas que) dans leurs démarches, leur intégration et leur réussite à l'Univ !<br/>
         Soirées, rencontres, défilés, tournois... On fait vivre les cultures africaines sur le campus à travers des événements forts !
        </p>
        <div className="flex items-center mb-5">
          <a href="https://www.helloasso.com/associations/karibu-uge/adhesions/formulaire-adhesion">
            <BoutonPrimaire>
              Rejoignez-nous !                              
            </BoutonPrimaire>
          </a>
        </div>
      </section>
}