export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="flex justify-between mx-40 px-4">
          <img src="LogoKaribu.png" alt="Logo Karibu" className="w-24 h-24 max-xs:w-10 max-xs:h-10" />
          <div className="flex justify-evenly items-center text-xl ml-auto gap-6">
            <a href="#home" className="font-ubuntu hover:transition-all hover:scale-105">Accueil</a>
            <a href="#equipe" className="font-ubuntu hover:transition-all hover:scale-105">Notre équipe</a>
            <a href="#nouscontacter" className="font-ubuntu hover:transition-all hover:scale-105">Nous contacter</a>
          </div>
        </div>
    </nav>);
};