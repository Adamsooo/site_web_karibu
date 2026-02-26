import { TitrePrincipal } from "../TitrePrincipal.jsx";
import CarteMembre from "../CarteMembre.jsx";
import CarteClaire from "../CarteClaire.jsx";
export const Equipe = () => {
    return (
        <section id="equipe"
                 className="flex flex-col gap-10 p-5 
                            bg-linear-to-r from-amber-100 to-amber-500
                            scroll-mt-20
                            md:p-10 md:scroll-mt-24"  
        >    
                <div className="flex justify-start ">
                    <TitrePrincipal titre="Notre Equipe" />
                </div>
                <div className="overflow-x-auto whitespace-nowrap px-5 py-5 flex flex-row justify-start w-full gap-6">
                    {/*<CarteMembre
                        image="https://ssl.images-ssl-mars.com/50018/2025/09/28/1/e/1eecbe7353fd3180.jpg"
                        title="Hello"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, architecto ut asperiores totam ipsum?"
                        buttonText="En savoir plus"
                        onButtonClick={() => alert("Tu as cliqué !")}
                    />*/}
                    <CarteMembre
                                    image="/Membres/Malick.PNG"
                                    title="Malick"
                                    description=""
                                    buttonText="En savoir plus"
                                    link="#"
                    />
                    <CarteMembre
                                    image="/Membres/Makinie.PNG"
                                    title="Makinie"
                                    description=""
                                    buttonText="En savoir plus"
                                    link="#"
                    />
                    <CarteMembre
                                    image="/Membres/Aïssatou.webp"
                                    title="Aïssatou"
                                    description=""
                                    buttonText="En savoir plus"
                                    link="#"
                    />
                    <CarteMembre
                                    image="/Membres/Marjory.webp"
                                    title="Marjory"
                                    description=""
                                    buttonText="En savoir plus"
                                    link="#"
                    />
                    <CarteMembre
                                    image="/Membres/Méryle.webp"
                                    title="Méryle"
                                    description=""
                                    buttonText="En savoir plus"
                                    link="#"
                    />
                    <CarteMembre
                                    image="/Membres/Elmer.webp"
                                    title="Elmer"
                                    description=""
                                    buttonText="En savoir plus"
                                    link="#"
                    />
                    <CarteMembre
                                    image="/Membres/Adams.webp"
                                    title="Adams"
                                    description=""
                                    buttonText="En savoir plus"
                                    link="#"
                    />
                </div>
        </section>
    )
};
