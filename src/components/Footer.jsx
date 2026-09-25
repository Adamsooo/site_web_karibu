import { NAVIGATION } from "../config";
import { rouvrirBandeau } from "../consentement";

export const Footer = () => {
    return (
        <footer className="flex-col items-center justify-evenly bg-orange-950 text-amber-200 px-6 md:px-20 py-4">
            <div className="flex items-center justify-center ">
                <div className="flex items-center ">
                    <a href="/#home">
                        <img src="/LogoKaribu.webp" alt="Karibu UGE, retour à l'accueil" width="80" height="80" loading="lazy" className="w-20 h-20 inline-block mr-2" />
                    </a>
                </div>
                {/* Trait blanc entre les deux sections */}
                <div className="h-12 border-l border-amber-100 mx-4"></div>
                <nav className="grid gap-1 text-md md:text-xl pl-4">
                    {NAVIGATION.map(({ href, label }) => (
                        <a key={href} href={href} className="font-ubuntu transition-all hover:scale-105">{label}</a>
                    ))}
                </nav>
            </div>
            <div className="border-t border-amber-100 my-4"></div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-ubuntu">
                <a href="/cgu" className="hover:underline">Mentions légales & CGU</a>
                <a href="/politique-de-confidentialite" className="hover:underline">Politique de confidentialité</a>
                <button type="button" onClick={rouvrirBandeau} className="cursor-pointer hover:underline">Gérer les cookies</button>
            </div>
            <p className="text-center text-sm md:text-xl text-white mt-4">© {new Date().getFullYear()} Karibu UGE, tous droits réservés.</p>
        </footer>
    )
}
