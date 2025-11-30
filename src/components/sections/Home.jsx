import { BoutonPrimaire } from "../BoutonPrimaire.jsx";
import { BoutonSecondaire } from "../BoutonSecondaire.jsx";
import { TitreHero } from "../TitreHero.jsx";

export const Home = () => {
    return <section id="home" 
                    className="flex flex-col pt-20 justify-center items-center 
                               text-center bg-linear-to-r from-amber-100 to-amber-500 bg-amber-50 
                               gap-5
                               scroll-mt-24
                               md:pt-24">
        <div className="flex md:flex-row flex-col items-center">
          <div>
            <TitreHero titre="Bienvenue chez"/>
          </div>
          <div>
            <img src="LogoKaribuOriginal.png" 
                 alt="Logo Karibu Original" 
                 className="ml-2 w-50 h-50
                            md:w-80 md:h-80 md:mt-8" />
          </div>
        </div>
        <h2 className="font-ubuntu text-4xl">L'asso <span className="font-ubuntu-italic">afro</span> de l’Université Gustave Eiffel.</h2>
        <p className="font-raleway text-xl max-w-lg text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In omnis dicta quia iure eos optio libero dignissimos ipsa delectus tempora numquam aspernatur alias corrupti beatae, dolores ex consequuntur nisi itaque.
        </p>
        <div className="flex items-center mb-5">
          <a href="https://www.helloasso.com/associations/karibu-uge/adhesions/formulaire-adhesion">
            <BoutonPrimaire>
              Nous rejoindre                              
            </BoutonPrimaire>
          </a>
        </div>
      </section>
}