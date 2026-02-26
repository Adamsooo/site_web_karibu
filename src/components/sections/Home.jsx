import { useEffect, useState } from "react";
import { BoutonPrimaire } from "../BoutonPrimaire.jsx";

export const Home = () => {

  const desktopImages = [
    "/HeroImages/Hero_Image_Desktop_1.webp",
    "/HeroImages/Hero_Image_Desktop_2.webp",
    "/HeroImages/Hero_Image_Desktop_3.webp",
  ];

  const mobileImages = [
    "/HeroImages/Hero_Image_Mobile_1.webp",
    "/HeroImages/Hero_Image_Mobile_2.webp",
    "/HeroImages/Hero_Image_Mobile_3.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Détecte changement taille écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  // Slider automatique
  useEffect(() => {
    const images = isMobile ? mobileImages : desktopImages;

    if (images.length < 2) return; // inutile de slider

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const images = isMobile ? mobileImages : desktopImages;
  return (
    <section
      id="home"
      className="
        relative
        flex flex-col justify-center items-center
        text-center
        min-h-screen
        px-4
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      
      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenu */}
      <div className="relative z-10 mt-55 mb-5 flex flex-col items-center gap-4">

        <div>
          <img src="/HeroImages/KaribuRECRUTE.png" 
                alt="Karibu recrute" 
                className="ml-2 mt-5
                          md:max-w-145 md:mt-12" />
        </div>

        <h2 className="font-ubuntu text-3xl md:text-5xl text-amber-100">
          Deviens <span className="italic">membre</span> de ton asso préférée !
        </h2>

        <p className="font-raleway text-amber-100 text-lg md:text-2xl max-w-2xl ">
          Tu as toujours souhaité rejoindre une asso ? Organiser des événements ?
          Porter des projets ? Implique-toi et vis une expérience enrichissante !
        </p>

        <BoutonPrimaire>
          Rejoignez-nous !
        </BoutonPrimaire>
      </div>
    </section>
  );
}