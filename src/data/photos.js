/* Photos de la section "Photothèque", dans l'ordre d'affichage.

   Champs :
   - src        : photo complète (affichée quand on clique sur "Voir toutes les photos")
   - miniature  : version réduite pour le bandeau qui défile (~500 x 360 px en .webp)
   - legende    : courte description, sert aussi de texte alternatif

   Pour l'instant : les visuels des événements. Les nouvelles photos iront par exemple dans
   /public/Photos (+ /public/Photos/miniatures). */

export const photos = [
  { src: "/Events/FANZONE.webp", miniature: "/Events/miniatures/FANZONE.webp", legende: "FANZONE CAN 2025" },
  { src: "/Events/KaribuSantaSecret.webp", miniature: "/Events/miniatures/KaribuSantaSecret.webp", legende: "Karibu Santa Secret" },
  { src: "/Events/BBQ.webp", miniature: "/Events/miniatures/BBQ.webp", legende: "BBQ de Karibu" },
  { src: "/Events/Conference.webp", miniature: "/Events/miniatures/Conference.webp", legende: "Conférence JEE à ESIEE Paris" },
  { src: "/Events/SalonMondeArabe.webp", miniature: "/Events/miniatures/SalonMondeArabe.webp", legende: "Salon du monde Arabe" },
  { src: "/Events/EpicerieSolidaire.webp", miniature: "/Events/miniatures/EpicerieSolidaire.webp", legende: "Collecte avec l'Épicerie Solidaire" },
];
