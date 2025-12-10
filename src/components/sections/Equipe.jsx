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
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, architecto ut asperiores totam ipsum?"
                                    buttonText="En savoir plus"
                                    link="https://www.linkedin.com/in/alla-michael-assande-617b9423b/"
                    />
                    <CarteMembre
                                    image="/Membres/Makinie.PNG"
                                    title="Makinie"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, architecto ut asperiores totam ipsum?"
                                    buttonText="En savoir plus"
                                    link="https://www.linkedin.com/in/alla-michael-assande-617b9423b/"
                    />
                    <CarteMembre
                                    image="/Membres/Aïssatou.PNG"
                                    title="Aïssatou"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, architecto ut asperiores totam ipsum?"
                                    buttonText="En savoir plus"
                                    link="https://www.linkedin.com/in/alla-michael-assande-617b9423b/"
                    />
                    <CarteMembre
                                    image="/Membres/Marjory.PNG"
                                    title="Marjory"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, architecto ut asperiores totam ipsum?"
                                    buttonText="En savoir plus"
                                    link="https://www.linkedin.com/in/alla-michael-assande-617b9423b/"
                    />
                    <CarteMembre
                                    image="/Membres/Méryle.PNG"
                                    title="Méryle"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, architecto ut asperiores totam ipsum?"
                                    buttonText="En savoir plus"
                                    link="https://www.linkedin.com/in/alla-michael-assande-617b9423b/"
                    />
                    <CarteMembre
                                    image="/Membres/Elmer.PNG"
                                    title="Elmer"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, architecto ut asperiores totam ipsum?"
                                    buttonText="En savoir plus"
                                    link="https://www.linkedin.com/in/alla-michael-assande-617b9423b/"
                    />
                    <CarteMembre
                                    image="/Membres/Adams.PNG"
                                    title="Adams"
                                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, architecto ut asperiores totam ipsum?"
                                    buttonText="En savoir plus"
                                    link="https://www.linkedin.com/in/alla-michael-assande-617b9423b/"
                    />
                </div>
        </section>
    )
};