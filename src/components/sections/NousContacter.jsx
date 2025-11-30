import { TitrePrincipal } from "../TitrePrincipal.jsx";
import { FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLinktree } from "react-icons/si";


export const NousContacter = () => {
    return (
        <section id='nouscontacter' 
                 className="scroll-mt-24 flex flex-col items-center p-10 
                            bg-linear-to-l from-amber-700 to-amber-950
                            gap-10">
            <TitrePrincipal titre="Vous avez des questions ?" variant="clair" />

            <div className="md:flex md:flex-row grid grid-cols-3 gap-8 text-3xl text-amber-200">
                <a 
                   href="https://www.instagram.com/karibu_uge/" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    <FaInstagram className="hover:text-amber-400 hover:scale-115 hover:shadow-2xl transition-colors duration-500 md:h-20 md:w-20 h-15 w-15" />
                </a>
                <a 
                   href="https://fr.linkedin.com/company/karibu-uge" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-amber-400 hover:scale-115 hover:shadow-2xl transition-colors duration-500 md:h-20 md:w-20 h-15 w-15" />
                </a>
                <a 
                   href="https://wa.me/33768289412?text=Bonjour%2C%20j%27ai%20vu%20l%27association%20Karibu%20sur%20insta%2C%20qu%27est-ce%20que%20vous%20faites%20concr%C3%A8tement%20et%20comment%20l%27int%C3%A9gre-t-on%20%3F" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    <FaWhatsapp className="hover:text-amber-400 hover:scale-115 hover:shadow-2xl transition-colors duration-500 md:h-20 md:w-20 h-15 w-15" />
                </a>
                <a 
                   href="mailto:info@assokaribu.com" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    <MdEmail className="hover:text-amber-400 hover:scale-115 hover:shadow-2xl transition-colors duration-500 md:h-20 md:w-20 h-15 w-15" />
                </a>
                <a 
                   href="https://linktr.ee/karibu_uge" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    <SiLinktree className="hover:text-amber-400 hover:scale-115 hover:shadow-2xl transition-colors duration-500 h-15 w-15" />
                </a>
            </div>


            {/*<form className="max-w-md min-w-md 
                             p-6 rounded-lg shadow-xl 
                             space-y-4
                             border border-amber-200">
        
                <div>
                    <label className="block text-2xl font-ubuntu-bold text-amber-200" htmlFor="name">
                    Nom
                    </label>
                    <input
                        id="name"
                        type="text"
                        class="w-full border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        placeholder="Votre nom"
                    />
                </div>

                <div>
                    <label className="block text-2xl font-ubuntu-bold text-amber-200" htmlFor="email">
                    Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        class="w-full border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
                        placeholder="votre@email.com"
                    />
                </div>

                <div>
                    <label className="block text-2xl font-ubuntu-bold text-amber-200" htmlFor="message">
                    Message
                    </label>
                    <textarea
                        id="message"
                        class="w-full border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200 h-28 resize-none"
                        placeholder="Votre message..."
                    >
                    </textarea>
                </div>

                <button
                    type="submit"
                    className="btn-primary w-full"
                >
                    Envoyer
                </button>
            </form>*/}
        </section>
    )
};