import { monter } from "../monter.jsx";
import { Layout } from "../components/Layout.jsx";
import { PageTexte } from "../components/PageTexte.jsx";
import { ASSOCIATION, HEBERGEUR } from "../config.js";
import { rouvrirBandeau } from "../consentement.js";

const Confidentialite = () => (
    <PageTexte titre="Politique de confidentialité" miseAJour="25 septembre 2026">
        <p>
            {ASSOCIATION.nom} attache une grande importance à la protection de vos données personnelles.
            Cette page explique quelles données sont collectées sur ce site, pourquoi, et quels sont vos droits,
            conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
        </p>

        <h2>1. Responsable du traitement</h2>
        <p>
            L'association {ASSOCIATION.nom} ({ASSOCIATION.forme.toLowerCase()}, RNA {ASSOCIATION.rna}),
            dont le siège est situé {ASSOCIATION.siege}.
            Contact : <a href={`mailto:${ASSOCIATION.email}`}>{ASSOCIATION.email}</a>.
        </p>

        <h2>2. Données collectées et finalités</h2>

        <h3>Formulaire de contact</h3>
        <ul>
            <li><strong>Données :</strong> nom, adresse e-mail, contenu du message.</li>
            <li><strong>Finalité :</strong> répondre à votre demande.</li>
            <li><strong>Base légale :</strong> intérêt légitime de l'association à répondre aux messages qui lui sont adressés (article 6.1.f du RGPD).</li>
            <li><strong>Durée de conservation :</strong> le temps de traiter votre demande, puis au maximum 1 an après notre dernier échange.</li>
        </ul>

        <h3>Mesure d'audience</h3>
        <ul>
            <li>
                <strong>Outils :</strong> Vercel Web Analytics et Vercel Speed Insights, activés <strong>uniquement si vous
                l'acceptez</strong> via le bandeau affiché lors de votre première visite.
            </li>
            <li>
                <strong>Données :</strong> pages consultées, site d'origine, pays, type d'appareil et de navigateur,
                temps de chargement. Ces outils ne déposent pas de cookie et produisent des statistiques agrégées :
                ils ne permettent pas de vous identifier ni de vous suivre sur d'autres sites.
            </li>
            <li><strong>Finalité :</strong> connaître la fréquentation du site et améliorer ses performances.</li>
            <li><strong>Base légale :</strong> votre consentement (article 6.1.a du RGPD), que vous pouvez retirer à tout moment.</li>
        </ul>

        <h3>Données techniques</h3>
        <p>
            Comme tout hébergeur, {HEBERGEUR.nom} enregistre des journaux techniques (adresse IP, date, page demandée)
            nécessaires à la sécurité et au bon fonctionnement du site. Ces journaux sont conservés pour une durée limitée.
        </p>

        <h2>3. Cookies et stockage local</h2>
        <p>
            Ce site ne dépose aucun cookie publicitaire ni de réseau social. Seul votre choix concernant la mesure
            d'audience est enregistré dans le stockage local de votre navigateur (clé <code>karibu-consentement</code>),
            pendant 6 mois, afin de ne pas vous redemander votre avis à chaque visite.
        </p>
        <p>
            <button type="button" onClick={rouvrirBandeau}
                    className="btn-primary text-base">
                Modifier mon choix
            </button>
        </p>

        <h2>4. Destinataires et sous-traitants</h2>
        <p>Vos données sont uniquement destinées aux membres du bureau de l'association. Elles ne sont jamais vendues.
            Pour fonctionner, le site fait appel aux prestataires suivants :</p>
        <ul>
            <li><strong>{HEBERGEUR.nom}</strong> : hébergement du site et mesure d'audience ;</li>
            <li><strong>EmailJS</strong> : acheminement des messages du formulaire de contact ;</li>
            <li><strong>Google (Gmail)</strong> : réception des messages dans la boîte e-mail de l'association.</li>
        </ul>
        <p>
            Certains de ces prestataires sont situés hors de l'Union européenne, notamment aux États-Unis.
            Ces transferts sont encadrés par le cadre de protection des données UE–États-Unis (Data Privacy Framework)
            ou par les clauses contractuelles types de la Commission européenne.
        </p>

        <h2>5. Services externes</h2>
        <p>
            Les adhésions (HelloAsso), le recrutement (Google Forms) et nos réseaux sociais (Instagram, LinkedIn,
            WhatsApp, Linktree) sont gérés par des services tiers, accessibles par des liens. Lorsque vous les utilisez,
            leurs propres politiques de confidentialité s'appliquent.
        </p>

        <h2>6. Vos droits</h2>
        <p>Vous disposez des droits suivants sur vos données :</p>
        <ul>
            <li>droit d'accès, de rectification et d'effacement ;</li>
            <li>droit d'opposition et de limitation du traitement ;</li>
            <li>droit à la portabilité ;</li>
            <li>droit de retirer votre consentement à tout moment ;</li>
            <li>droit de définir des directives sur le sort de vos données après votre décès.</li>
        </ul>
        <p>
            Pour les exercer, écrivez-nous à <a href={`mailto:${ASSOCIATION.email}`}>{ASSOCIATION.email}</a>.
            Nous vous répondrons dans un délai d'un mois. Si vous estimez que vos droits ne sont pas respectés,
            vous pouvez adresser une réclamation à la CNIL (<a href="https://www.cnil.fr/fr/plaintes">cnil.fr</a>).
        </p>

        <h2>7. Sécurité</h2>
        <p>
            Le site est accessible uniquement en HTTPS (connexion chiffrée). Les identifiants du service d'envoi d'e-mails
            sont conservés côté serveur et ne sont jamais exposés dans le navigateur.
        </p>
    </PageTexte>
);

monter(<Layout><Confidentialite /></Layout>);
