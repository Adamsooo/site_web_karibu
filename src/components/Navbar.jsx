import React, { use } from "react";
import { useEffect } from "react";
export const Navbar = ({menuOpen,setMenuOpen}) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]); 
  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg 
                    border-b border-white/10 shadow-lg">
        <div className="md:hidden flex justify-between items-center mx-10 px-4 py-2">
          <div>
            <a href="#home">
              <img src="/LogoKaribuNoel.png" alt="Logo Karibu" className="w-16 h-16" />
            </a>
          </div>
          <div className="text-2xl font-black cursor-pointer md:hidden"
               onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>
        </div>
        <div className="hidden md:flex justify-between mx-40 px-4">
          <img src="/LogoKaribuNoel.png" alt="Logo Karibu" className="w-24 h-24 max-xs:w-10 max-xs:h-10" />
          <div className="flex justify-evenly items-center text-xl ml-auto gap-8">
            <a href="#home" className="font-ubuntu hover:transition-all hover:scale-105">Accueil</a>
            <a href="#equipe" className="font-ubuntu hover:transition-all hover:scale-105">Notre équipe</a>
            <a href="#nouscontacter" className="font-ubuntu hover:transition-all hover:scale-105">Nous contacter</a>
            <a href="https://www.helloasso.com/associations/karibu-uge/adhesions/formulaire-adhesion" className="font-ubuntu hover:transition-all hover:scale-105">Adhérer</a>
          </div>
        </div>
    </nav>);
};