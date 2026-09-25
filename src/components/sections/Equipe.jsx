import { TitrePrincipal } from "../TitrePrincipal.jsx";
import CarteMembre from "../CarteMembre.jsx";

const MEMBRES = ["Malick", "Makinie", "Aïssatou", "Marjory", "Méryle", "Elmer", "Adams"];

export const Equipe = () => {
    return (
        <section id="equipe"
                 className="flex flex-col gap-10 p-5
                            bg-linear-to-r from-amber-100 to-amber-500
                            scroll-mt-20
                            md:p-10 md:scroll-mt-24"
        >
                <div className="flex justify-start ">
                    <TitrePrincipal titre="Notre équipe" />
                </div>
                <div className="overflow-x-auto px-5 py-5 flex flex-row justify-start w-full gap-6">
                    {MEMBRES.map((nom) => (
                        <CarteMembre key={nom} image={`/Membres/${nom}.webp`} nom={nom} />
                    ))}
                </div>
        </section>
    )
};
