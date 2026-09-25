/* Liste des membres affichés dans la section "Notre équipe", dans l'ordre d'affichage.

   Champs :
   - prenom     : affiché sous la photo
   - statut     : rôle dans l'association, affiché sous le prénom
   - photo      : chemin dans /public/Membres (format portrait 4:5, idéalement 640 x 800 px en .webp)
   - direction  : true = affiché sur la première ligne (présidence), les autres membres en dessous */

export const membres = [
  { prenom: "Axel", statut: "Président", photo: "/Membres/Axel.webp", direction: true },
  { prenom: "Malick", statut: "Vice-président", photo: "/Membres/Malick.webp", direction: true },
  { prenom: "Mariam", statut: "Secrétaire générale", photo: "/Membres/Mariam.webp" },
  { prenom: "Fouade", statut: "Secrétaire générale adjoint", photo: "/Membres/Fouade.webp" },
  { prenom: "Donat", statut: "Trésorier", photo: "/Membres/Donat.webp" },
];
