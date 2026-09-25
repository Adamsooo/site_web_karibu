import { monter } from "../monter.jsx";
import { Layout } from "../components/Layout.jsx";
import { PageTexte } from "../components/PageTexte.jsx";
import { ASSOCIATION, HEBERGEUR, SITE_URL } from "../config.js";

const Cgu = () => (
    <PageTexte titre="Mentions légales & CGU" miseAJour="25 septembre 2026">
        <h2>1. Éditeur du site</h2>
        <p>
            Le site <a href={SITE_URL}>{SITE_URL.replace("https://", "")}</a> est édité par
            l'association <strong>{ASSOCIATION.nom}</strong>, {ASSOCIATION.forme.toLowerCase()}.
        </p>
        <ul>
            <li>Siège social : {ASSOCIATION.siege}</li>
            <li>Numéro RNA : {ASSOCIATION.rna}</li>
            <li>SIREN : {ASSOCIATION.siren}</li>
            <li>Contact : <a href={`mailto:${ASSOCIATION.email}`}>{ASSOCIATION.email}</a></li>
            <li>Directeur·rice de la publication : {ASSOCIATION.directeurPublication}</li>
        </ul>

        <h2>2. Hébergement</h2>
        <p>
            Le site est hébergé par {HEBERGEUR.nom}, {HEBERGEUR.adresse} (<a href={HEBERGEUR.site}>{HEBERGEUR.site.replace("https://", "")}</a>).
        </p>

        <h2>3. Conditions générales d'utilisation</h2>

        <h3>Objet</h3>
        <p>
            Les présentes conditions générales d'utilisation (CGU) encadrent l'accès et l'utilisation du site
            de {ASSOCIATION.nom}. Naviguer sur le site vaut acceptation de ces conditions.
        </p>

        <h3>Accès au site</h3>
        <p>
            Le site est accessible gratuitement à toute personne disposant d'un accès à Internet.
            L'association s'efforce d'en assurer la disponibilité mais peut l'interrompre à tout moment,
            notamment pour maintenance, sans que sa responsabilité puisse être engagée.
        </p>

        <h3>Propriété intellectuelle</h3>
        <p>
            Le logo, les textes, les visuels et les photographies du site sont la propriété de {ASSOCIATION.nom}
            ou de leurs auteurs respectifs. Toute reproduction ou réutilisation, totale ou partielle, sans
            autorisation écrite préalable est interdite.
        </p>

        <h3>Droit à l'image</h3>
        <p>
            Les photographies publiées ont été prises lors d'événements de l'association. Toute personne
            qui y apparaît peut demander leur retrait en écrivant à <a href={`mailto:${ASSOCIATION.email}`}>{ASSOCIATION.email}</a>.
        </p>

        <h3>Formulaire de contact</h3>
        <p>
            Le formulaire de contact est destiné aux échanges avec l'association. Il est interdit de l'utiliser
            pour envoyer des contenus publicitaires, illicites, injurieux ou automatisés. Le traitement des données
            transmises est décrit dans la <a href="/politique-de-confidentialite">politique de confidentialité</a>.
        </p>

        <h3>Liens externes</h3>
        <p>
            Le site contient des liens vers des services tiers (HelloAsso, Google Forms, Instagram, LinkedIn,
            WhatsApp, Linktree…). L'association n'est pas responsable de leur contenu ni de leurs pratiques
            en matière de données personnelles.
        </p>

        <h3>Responsabilité</h3>
        <p>
            Les informations publiées (dates, lieux, programmes d'événements) sont données à titre indicatif
            et peuvent évoluer. L'association ne saurait être tenue responsable d'une erreur ou d'une omission.
        </p>

        <h3>Modification des CGU</h3>
        <p>
            L'association peut modifier les présentes CGU à tout moment. La version applicable est celle
            en ligne au moment de la consultation du site.
        </p>

        <h3>Droit applicable</h3>
        <p>
            Les présentes CGU sont soumises au droit français. En cas de litige, et à défaut de solution amiable,
            les tribunaux français seront seuls compétents.
        </p>
    </PageTexte>
);

monter(<Layout><Cgu /></Layout>);
