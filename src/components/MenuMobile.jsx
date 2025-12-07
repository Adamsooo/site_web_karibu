import React, { use } from "react";
import { useEffect } from "react";
export const MenuMobile = ({menuOpen,setMenuOpen}) => {
    return (
        <div className={`fixed top-20 left-0 w-full
                        flex flex-col items-center justify-between
                        transition-all duration-300 ease-in-out
                        backdrop-blur-lg text-amber-950
                        text-xl font-ubuntu
                        ${
                        menuOpen 
                        ? 'h-screen opacity-100 pointer-events-auto' 
                        : 'h-0 opacity-0 pointer-events-none'}
                        `}>
            
            <button onClick={()=>setMenuOpen(false)}
                    className="absolute top-10 right-10 
                               text-bold text-5xl
                               focus:outline-none cursor-pointer
                               hover:scale-150 hover:transition-all hover:duration-500"
                    aria-label="Close Menu">
                &times;
            </button>
            <nav>
                
                <a href="#home"
                   onClick={()=>setMenuOpen(false)} 
                   className={`flex flex-col items-center 
                               h-full justify-center
                               hover:underline-offset-1 hover:underline hover:scale-110 
                               hover:transition-all hover:duration-500
                                ${
                                    menuOpen
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-5'
                                }
                                `}>
                    Accueil
                </a>
                <a href="#equipe"
                   onClick={()=>setMenuOpen(false)} 
                   className={`flex flex-col items-center 
                               h-full justify-center
                               hover:underline-offset-1 hover:underline hover:scale-110 
                               hover:transition-all hover:duration-500
                                ${
                                    menuOpen
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-5'
                                }
                                `}>
                    Notre équipe
                </a>
                <a href="#nouscontacter"
                   onClick={()=>setMenuOpen(false)} 
                   className={`flex flex-col items-center 
                               h-full justify-center
                               hover:underline-offset-1 hover:underline hover:scale-110 
                               hover:transition-all hover:duration-500
                                ${
                                    menuOpen
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-5'
                                }
                                `}>
                    Nous contacter
                </a>
                <a href="https://www.helloasso.com/associations/karibu-uge/adhesions%20%20/formulaire-adhesion"
                   onClick={()=>setMenuOpen(false)} 
                   className={`flex flex-col items-center 
                               h-full justify-center
                               hover:underline-offset-1 hover:underline hover:scale-110 
                               hover:transition-all hover:duration-500
                                ${
                                    menuOpen
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-5'
                                }
                                `}>
                    Adhérer
                </a>
            </nav>
        </div>
    )
}

export default MenuMobile;