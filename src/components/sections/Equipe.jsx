import { TitrePrincipal } from "../TitrePrincipal.jsx";
import CarteMembre from "../CarteMembre.jsx";
import { membres } from "../../data/membres.js";

// Présidence sur la première ligne, le reste du bureau en dessous
const direction = membres.filter((m) => m.direction);
const bureau = membres.filter((m) => !m.direction);

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

                <div className="flex flex-col items-center gap-10 pb-5">
                    <ul className="flex flex-wrap justify-center gap-6">
                        {direction.map((membre) => (
                            <li key={membre.prenom}>
                                <CarteMembre membre={membre} miseEnAvant />
                            </li>
                        ))}
                    </ul>

                    {bureau.length > 0 && (
                        <ul className="flex flex-wrap justify-center gap-6">
                            {bureau.map((membre) => (
                                <li key={membre.prenom}>
                                    <CarteMembre membre={membre} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
        </section>
    )
};
