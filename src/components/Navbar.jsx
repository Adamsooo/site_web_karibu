import { useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAVIGATION } from "../config";

export const Navbar = ({menuOpen,setMenuOpen}) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (!menuOpen) return;
    // Échap ferme aussi le menu
    const surTouche = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", surTouche);
    return () => window.removeEventListener("keydown", surTouche);
  }, [menuOpen, setMenuOpen]);
  return (
    // Fond sombre semi-opaque : le texte clair reste lisible au-dessus des sections claires
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg
                    border-b border-white/10 shadow-lg">
        <div className="md:hidden flex justify-between items-center mx-4 px-2 py-2">
          <a href="/#home">
            <img src="/LogoKaribu.webp" alt="Karibu UGE, retour à l'accueil" width="64" height="64" className="w-16 h-16" />
          </a>
          {/* Même bouton pour ouvrir et fermer : ☰ devient ✕ quand le menu est ouvert */}
          <button
               type="button"
               className="flex items-center justify-center w-11 h-11 text-3xl text-amber-100 cursor-pointer
                          transition-transform duration-300 hover:scale-110"
               aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
               aria-expanded={menuOpen}
               aria-controls="menu-mobile"
               onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
        <div className="hidden md:flex justify-between mx-10 lg:mx-40 px-4">
          <a href="/#home">
            <img src="/LogoKaribu.webp" alt="Karibu UGE, retour à l'accueil" width="96" height="96" className="w-24 h-24" />
          </a>
          <div className="flex justify-evenly items-center text-lg lg:text-xl whitespace-nowrap ml-auto gap-5 lg:gap-8">
            {NAVIGATION.map(({ href, label }) => (
              <a key={href} href={href} className="font-ubuntu text-amber-100 transition-all hover:scale-105">{label}</a>
            ))}
          </div>
        </div>
    </nav>);
};
