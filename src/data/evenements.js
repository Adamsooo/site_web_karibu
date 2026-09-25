/* Liste des événements affichés dans la section "Nos événements".

   Champs :
   - titre                : titre affiché sur la carte et dans la fenêtre détaillée
   - image                : chemin dans /public/Events (+ une miniature du même nom dans /public/Events/miniatures)
   - dateDebut / dateFin  : "AAAA-MM-JJ" (dateFin optionnelle). null = date non affichée
   - lieu                 : null = lieu non affiché
   - resume               : texte court affiché sur la carte
   - description          : texte complet affiché dans la fenêtre détaillée
   - lien                 : post Instagram / LinkedIn (affiché pour les événements passés)
   - lienInscription      : lien d'inscription (affiché pour les événements à venir)

   Les événements à venir apparaissent en premier, puis les passés du plus récent au plus ancien. */

export const evenements = [
  {
    titre: "FANZONE CAN2025",
    image: "/Events/FANZONE.webp",
    dateDebut: "2025-12-21",
    dateFin: "2026-01-18",
    lieu: "Résidence Arpej Copernic, Champs-sur-Marne",
    resume: "Notre FANZONE ouverte à tous les étudiants de l'Université Gustave Eiffel pour suivre ensemble les matchs de la CAN 2025.",
    description: "Notre FANZONE ouverte à tous les étudiants de l'Université Gustave Eiffel pour suivre ensemble les matchs de la CAN 2025. Une ambiance festive, des écrans géants et des moments de partage inoubliables vous attendent !",
    lien: "https://www.instagram.com/p/DSf3TK9DCzp/",
    lienInscription: null,
  },
  {
    titre: "Karibu Santa Secret",
    image: "/Events/KaribuSantaSecret.webp",
    dateDebut: null, // TODO : date à renseigner
    lieu: null,
    resume: "Notre Santa Secret annuel pour célébrer la fin de l'année avec nos membres.",
    description: "Nous organisons notre Santa Secret annuel pour célébrer la fin de l'année avec nos membres. C'est l'occasion parfaite pour partager des cadeaux, des rires et de la bonne humeur entre amis. Rejoignez-nous pour une soirée mémorable remplie de surprises et de joie festive !",
    lien: "https://www.instagram.com/reel/DShQgcOjBuU/",
    lienInscription: null,
  },
  {
    titre: "BBQ de Karibu",
    image: "/Events/BBQ.webp",
    dateDebut: null, // TODO : date à renseigner
    lieu: null,
    resume: "Notre événement de clôture du dernier mandat a été un franc succès !",
    description: "Notre événement de clôture du dernier mandat a été un franc succès ! Un grand merci à tous les participants qui ont rendu cette journée mémorable. Entre les délicieuses grillades, les jeux amusants et les moments de partage, nous avons créé des souvenirs inoubliables ensemble. Restez connectés pour nos prochains événements !",
    lien: "https://www.instagram.com/p/DMSVIEwst7K/",
    lienInscription: null,
  },
  {
    titre: "Conférence JEE",
    image: "/Events/Conference.webp",
    dateDebut: "2025-04-30",
    lieu: "ESIEE Paris",
    resume: "Notre première conférence organisée à ESIEE Paris.",
    description: "Notre première conférence organisée à ESIEE Paris.",
    lien: "https://www.instagram.com/karibu_uge/p/DJvmw-eMSU6/",
    lienInscription: null,
  },
  {
    titre: "Salon du monde Arabe",
    image: "/Events/SalonMondeArabe.webp",
    dateDebut: "2025-05-24",
    dateFin: "2025-05-25",
    lieu: "Montrouge",
    resume: "Nous étions au salon du monde Arabe à Montrouge pour représenter les cultures africaines.",
    description: "Nous étions au salon du monde Arabe à Montrouge pour représenter les cultures africaines et échanger avec d'autres associations culturelles.",
    lien: null, // TODO : lien du post (l'ancien lien était celui de la Conférence JEE)
    lienInscription: null,
  },
  {
    titre: "Collecte w/ l'Épicerie Solidaire",
    image: "/Events/EpicerieSolidaire.webp",
    dateDebut: null, // TODO : date à renseigner
    lieu: "Université Gustave Eiffel",
    resume: "Notre participation rituelle aux collectes de l'Épicerie Solidaire de l'Université Gustave Eiffel.",
    description: "C'est un rituel pour nous de participer aux collectes de l'Épicerie Solidaire de l'Université Gustave Eiffel. Merci à tous ceux qui ont contribué à cette belle initiative de solidarité étudiante !",
    lien: "https://fr.linkedin.com/posts/karibu-uge_solidarit%C3%A9%C3%A9tudiante-engagementassociatif-activity-7291820045951746049-iFMK",
    lienInscription: null,
  },
];

// "AAAA-MM-JJ" -> Date locale (évite le décalage UTC de new Date("AAAA-MM-JJ"))
const versDate = (iso) => {
  const [a, m, j] = iso.split("-").map(Number);
  return new Date(a, m - 1, j);
};

const formatJour = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" });

export const formaterDate = ({ dateDebut, dateFin }) => {
  if (!dateDebut) return null;
  if (!dateFin) return formatJour.format(versDate(dateDebut));
  return formatJour.formatRange(versDate(dateDebut), versDate(dateFin));
};

export const estAVenir = ({ dateDebut, dateFin }) => {
  const fin = dateFin ?? dateDebut;
  if (!fin) return false;
  const aujourdhui = new Date();
  aujourdhui.setHours(0, 0, 0, 0);
  return versDate(fin) >= aujourdhui;
};

// À venir (le plus proche d'abord), puis passés (le plus récent d'abord), puis sans date
export const trierEvenements = (liste) => {
  const rang = (e) => (!e.dateDebut ? 2 : estAVenir(e) ? 0 : 1);
  return [...liste].sort((a, b) => {
    if (rang(a) !== rang(b)) return rang(a) - rang(b);
    if (rang(a) === 2) return 0;
    const ecart = versDate(a.dateDebut) - versDate(b.dateDebut);
    return rang(a) === 0 ? ecart : -ecart;
  });
};
