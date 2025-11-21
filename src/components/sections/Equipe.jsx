import { TitrePrincipal } from "../TitrePrincipal.jsx";
import CarteMembre from "../CarteMembre.jsx";
export const Equipe = () => {
    return (
        <>
            <div id="equipe" 
            className="flex flex-col gap-10 p-10 
                        bg-linear-to-r from-amber-100 to-amber-500
                        scroll-mt-24">
                <div className="flex justify-end ">
                <TitrePrincipal titre="Notre Equipe" />
                </div>
                <div className="flex flex-row justify-center w-full gap-6">
                    <CarteMembre
                        image="https://ssl.images-ssl-mars.com/50018/2025/09/28/1/e/1eecbe7353fd3180.jpg"
                        title="Hello"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in, architecto ut asperiores totam ipsum?"
                        buttonText="En savoir plus"
                        onButtonClick={() => alert("Tu as cliqué !")}
                    />
                </div>
            </div>
        </>
    )
};