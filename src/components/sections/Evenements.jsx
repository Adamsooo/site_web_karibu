import CarteClaire from '../CarteClaire.jsx';
import { TitrePrincipal } from "../TitrePrincipal.jsx";

export const Evenements = () => {
    return ( 
    <section className="flex flex-col gap-10 p-5 
                        bg-linear-to-l from-amber-700 to-amber-950
                        md:p-10">
        <TitrePrincipal titre="Nos événements à venir..." variant="clair" />
        <div className="overflow-x-auto whitespace-nowrap flex flex-row justify-start w-full px-5 py-5 gap-6">
            <CarteClaire
                image="https://ssl.images-ssl-mars.com/50018/2025/09/28/1/e/1eecbe7353fd3180.jpg"
                title="Hello"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, architecto ut asperiores totam ipsum?"
                buttonText="En savoir plus"
                link="https://www.linkedin.com/in/alla-michael-assande-617b9423b/"
            />
            <CarteClaire
                image="https://ssl.images-ssl-mars.com/50018/2025/09/28/1/e/1eecbe7353fd3180.jpg"
                title="Hello"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, architecto ut asperiores totam ipsum?"
                buttonText="En savoir plus"
                onButtonClick={() => alert("Tu as cliqué !")}
            />
            <CarteClaire
                image="https://ssl.images-ssl-mars.com/50018/2025/09/28/1/e/1eecbe7353fd3180.jpg"
                title="Hello"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, architecto ut asperiores totam ipsum?"
                buttonText="En savoir plus"
                onButtonClick={() => alert("Tu as cliqué !")}
            />
            <CarteClaire
                image="https://ssl.images-ssl-mars.com/50018/2025/09/28/1/e/1eecbe7353fd3180.jpg"
                title="Hello"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, architecto ut asperiores totam ipsum?"
                buttonText="En savoir plus"
                onButtonClick={() => alert("Tu as cliqué !")}
            />
        </div>
    </section>
    )
};