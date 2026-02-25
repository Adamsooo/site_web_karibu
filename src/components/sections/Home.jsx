import { BoutonPrimaire } from "../BoutonPrimaire.jsx";
import { TitreHero } from "../TitreHero.jsx";

export const Home = () => {
    return <section id="home" 
                    className="flex flex-col pt-22 px-1 justify-center items-center 
                               text-center bg-linear-to-r from-amber-100 to-amber-500 bg-amber-50 
                               gap-2
                               scroll-mt-24
                               md:pt-16">
        <div className="flex md:flex-row flex-col items-center">
          <div>
            <img src="KaribuRECRUTE.png" 
                 alt="Karibu recrute" 
                 className="ml-2 mt-5
                            md:max-w-145 md:mt-12" />
          </div>
        </div>
        <h2 className="font-ubuntu text-3xl md:text-4xl">Deviens <span className="font-ubuntu-italic">membre</span> de ton asso préférée !</h2>
        <p className="font-raleway text-xl md:text-2xl md:max-w-2xl text-center">
         Tu as toujours souhaité rejoindre une asso ? Organiser des événements ? Faire des sorties ? Porter des projets ? <br/> 
         Implique-toi dans les projets, prends part aux événements et vis une expérience enrichissante aux côtés d’une famille!
        </p>
        <div className="flex items-center mt-3 mb-5">
          <a href="https://www.helloasso.com/associations/karibu-uge/adhesions/formulaire-adhesion">
            <BoutonPrimaire>
              Rejoignez-nous !
            </BoutonPrimaire>
          </a>
        </div>
      </section>
}