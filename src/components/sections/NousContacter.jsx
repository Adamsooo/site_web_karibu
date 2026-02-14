import { TitrePrincipal } from "../TitrePrincipal.jsx";
import { FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLinktree } from "react-icons/si";
import emailjs from '@emailjs/browser';
import { useState } from "react";

// Initialisez EmailJS avec votre clé publique
emailjs.init("dFptsp3Wv-xZXCQwM");

export const NousContacter = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatusMessage('');

        try {
            await emailjs.send(
                'service_k5i9k5h',
                'template_xahczrb',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'karibu.uge@gmail.com'
                }
            );
            
            setStatusMessage('✓ Message envoyé avec succès !');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            setStatusMessage('✗ Erreur lors de l\'envoi du message. Veuillez réessayer.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id='nouscontacter' 
                 className="flex flex-col items-center p-5 md:p-10 
                            bg-linear-to-l from-amber-700 to-amber-950
                            gap-10
                            scroll-mt-20 md:scroll-mt-24">
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
                   href="mailto:karibu.uge@gmail.com" 
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
            <div className="flex flex-col gap-4
                            border border-amber-200 p-6 rounded-lg shadow-xl bg-linear-to-br from-amber-900 to-amber-950
                             max-w-md w-full">
                <h1>
                    <span className="flex justify-center text-3xl font-ubuntu-bold text-amber-200">Laissez-nous un message</span>
                </h1>
                <form className="space-y-3" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-xl md:text-2xl font-ubuntu-bold text-amber-200" htmlFor="name">
                        Nom
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
                            placeholder="Votre nom"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block  text-xl md:text-2xl font-ubuntu-bold text-amber-200" htmlFor="email">
                        Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
                            placeholder="votre@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block  text-xl md:text-2xl font-ubuntu-bold text-amber-200" htmlFor="message">
                        Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200 h-28 resize-none"
                            placeholder="Votre message..."
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        >
                        </textarea>
                    </div>
                    {statusMessage && (
                        <div className={`text-center py-2 rounded ${statusMessage.includes('✓') ? 'bg-green-600' : 'bg-red-600'} text-white`}>
                            {statusMessage}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Envoi en cours...' : 'Envoyer'}
                    </button> 
                </form>
            </div>
        </section>
    )
};