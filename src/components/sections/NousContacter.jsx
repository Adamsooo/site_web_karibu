import { TitrePrincipal } from "../TitrePrincipal.jsx";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLinktree } from "react-icons/si";
import { useRef, useState } from "react";
import { LIENS, ASSOCIATION } from "../../config.js";
import { LIMITES, validerContact } from "../../lib/validationContact.js";

// Icone est un composant (react-icons) rendu dans le JSX
const RESEAUX = [
    { href: LIENS.instagram, label: "Instagram de Karibu UGE", Icone: FaInstagram },
    { href: LIENS.linkedin, label: "LinkedIn de Karibu UGE", Icone: FaLinkedin },
    { href: LIENS.whatsapp, label: "Écrire à Karibu UGE sur WhatsApp", Icone: FaWhatsapp },
    { href: `mailto:${ASSOCIATION.email}`, label: `Écrire un e-mail à ${ASSOCIATION.email}`, Icone: MdEmail },
    { href: LIENS.linktree, label: "Tous les liens de Karibu UGE (Linktree)", Icone: SiLinktree },
];

const FORMULAIRE_VIDE = { nom: '', email: '', message: '', site_web: '' };
const MESSAGE_SUCCES = { type: 'succes', texte: '✓ Message envoyé avec succès !' };
const MESSAGE_ERREUR = { type: 'erreur', texte: '✗ Erreur lors de l\'envoi du message. Veuillez réessayer dans quelques instants.' };

const classeChamp = (enErreur) => `w-full border rounded-md px-3 py-2
                     bg-amber-950/60 text-amber-50 placeholder:text-amber-200/60
                     focus:outline-none focus:ring-2 focus:ring-amber-200
                     ${enErreur ? 'border-red-400' : 'border-amber-200'}`;

const classeLabel = "block text-xl md:text-2xl font-ubuntu-bold text-amber-200";

const MessageErreur = ({ id, texte }) =>
    texte ? <p id={id} className="mt-1 text-sm font-ubuntu text-red-300">{texte}</p> : null;

export const NousContacter = () => {
    // site_web : champ piège invisible, seuls les robots le remplissent
    const [formData, setFormData] = useState(FORMULAIRE_VIDE);
    const [erreurs, setErreurs] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);
    // Premier caractère tapé : sert à détecter les robots qui remplissent le formulaire instantanément
    const debutSaisie = useRef(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        debutSaisie.current ??= Date.now();
        setFormData(prev => ({ ...prev, [id]: value }));
        // L'erreur d'un champ disparaît dès qu'il devient valide
        if (erreurs[id]) {
            setErreurs(prev => ({ ...prev, [id]: validerContact({ ...formData, [id]: value })[id] }));
        }
    };

    const handleBlur = (e) => {
        const { id } = e.target;
        if (!formData[id]) return; // pas d'erreur sur un champ que l'on n'a pas encore rempli
        setErreurs(prev => ({ ...prev, [id]: validerContact(formData)[id] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMessage(null);

        const nouvellesErreurs = validerContact(formData);
        setErreurs(nouvellesErreurs);
        const premierChampInvalide = Object.keys(nouvellesErreurs)[0];
        if (premierChampInvalide) {
            document.getElementById(premierChampInvalide)?.focus();
            return;
        }

        setIsLoading(true);
        try {
            const reponse = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    duree: Date.now() - (debutSaisie.current ?? Date.now()),
                }),
            });
            const resultat = await reponse.json().catch(() => ({}));

            if (!reponse.ok) {
                if (resultat.champs) setErreurs(resultat.champs);
                setStatusMessage(resultat.erreur ? { type: 'erreur', texte: `✗ ${resultat.erreur}` } : MESSAGE_ERREUR);
                return;
            }

            setStatusMessage(MESSAGE_SUCCES);
            setFormData(FORMULAIRE_VIDE);
            debutSaisie.current = null;
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            setStatusMessage(MESSAGE_ERREUR);
        } finally {
            setIsLoading(false);
        }
    };

    // Attributs d'accessibilité communs aux champs
    const aria = (id) => ({
        'aria-invalid': Boolean(erreurs[id]),
        'aria-describedby': erreurs[id] ? `${id}-erreur` : undefined,
    });

    return (
        <section id='nouscontacter'
                 className="flex flex-col items-center p-5 md:p-10
                            bg-linear-to-l from-amber-700 to-amber-950
                            gap-10
                            scroll-mt-20 md:scroll-mt-24">
            <TitrePrincipal titre="Vous avez des questions ?" variant="clair" />

            <div className="flex flex-wrap justify-center gap-8 text-amber-200">
                {RESEAUX.map(({ href, label, Icone }) => (
                    <a key={href}
                       href={href}
                       aria-label={label}
                       title={label}
                       target="_blank"
                       rel="noopener noreferrer">
                        <Icone aria-hidden="true" className="hover:text-amber-400 hover:scale-115 transition-all duration-500 md:h-20 md:w-20 h-14 w-14" />
                    </a>
                ))}
            </div>
            <div className="flex flex-col gap-4
                            border border-amber-200 p-6 rounded-lg shadow-xl bg-linear-to-br from-amber-900 to-amber-950
                             max-w-md w-full">
                <h3 className="text-center text-3xl font-ubuntu-bold text-amber-200">
                    Laissez-nous un message
                </h3>
                <form className="space-y-3" onSubmit={handleSubmit} noValidate>
                    <div>
                        <label className={classeLabel} htmlFor="nom">
                        Nom
                        </label>
                        <input
                            id="nom"
                            type="text"
                            className={classeChamp(erreurs.nom)}
                            placeholder="Votre nom"
                            value={formData.nom}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            maxLength={LIMITES.nom.max}
                            autoComplete="name"
                            required
                            {...aria('nom')}
                        />
                        <MessageErreur id="nom-erreur" texte={erreurs.nom} />
                    </div>
                    <div>
                        <label className={classeLabel} htmlFor="email">
                        Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className={classeChamp(erreurs.email)}
                            placeholder="votre@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            maxLength={LIMITES.email.max}
                            autoComplete="email"
                            required
                            {...aria('email')}
                        />
                        <MessageErreur id="email-erreur" texte={erreurs.email} />
                    </div>
                    <div>
                        <label className={classeLabel} htmlFor="message">
                        Message
                        </label>
                        <textarea
                            id="message"
                            className={`${classeChamp(erreurs.message)} h-28 resize-none`}
                            placeholder="Votre message..."
                            value={formData.message}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            maxLength={LIMITES.message.max}
                            required
                            {...aria('message')}
                        >
                        </textarea>
                        <div className="flex justify-between gap-2">
                            <MessageErreur id="message-erreur" texte={erreurs.message} />
                            <span className="ml-auto mt-1 text-xs font-ubuntu text-amber-200/70">
                                {formData.message.length}/{LIMITES.message.max}
                            </span>
                        </div>
                    </div>
                    {/* Champ piège, invisible pour les humains */}
                    <div className="hidden" aria-hidden="true">
                        <label htmlFor="site_web">Ne pas remplir</label>
                        <input
                            id="site_web"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            value={formData.site_web}
                            onChange={handleInputChange}
                        />
                    </div>
                    <p className="text-xs font-raleway text-amber-100/80">
                        Vos données servent uniquement à vous répondre.{" "}
                        <a href="/politique-de-confidentialite" className="underline hover:text-amber-300">
                            Politique de confidentialité
                        </a>
                    </p>
                    {statusMessage && (
                        <div role="status" className={`text-center py-2 rounded ${statusMessage.type === 'succes' ? 'bg-green-700' : 'bg-red-700'} text-white`}>
                            {statusMessage.texte}
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
