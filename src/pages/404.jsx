import { monter } from "../monter.jsx";
import { Layout } from "../components/Layout.jsx";

const Page404 = () => (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-6
                        bg-linear-to-l from-amber-700 to-amber-950 px-5 pt-28 pb-16 text-center">
        <p className="font-peachy-keen text-[9rem] leading-none text-amber-500 md:text-[12rem]" aria-hidden="true">
            404
        </p>
        <h1 className="font-ubuntu-bold text-3xl text-amber-100 md:text-4xl">
            Oups, cette page s'est perdue en chemin…
        </h1>
        <p className="max-w-xl font-raleway text-lg text-amber-100">
            La page que vous cherchez n'existe pas ou a été déplacée. Pas d'inquiétude,
            la famille Karibu vous attend à l'accueil !
        </p>
        <div className="flex flex-wrap justify-center gap-4">
            <a href="/" className="btn-primary">Retour à l'accueil</a>
            <a href="/#evenements" className="btn-primary">Voir nos événements</a>
        </div>
    </section>
);

monter(<Layout><Page404 /></Layout>);
