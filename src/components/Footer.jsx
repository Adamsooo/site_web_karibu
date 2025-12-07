export const Footer = () => {
    return (
        <footer className="flex-col items-center justify-evenly bg-orange-950 text-amber-200 px-20 py-4">
            <div className="flex items-center justify-center ">
                <div className="flex items-center ">
                    <a href="#home">
                        <img src="/LogoKaribu.png" alt="Logo Karibu" className="w-20 h-20 inline-block mr-2" />
                    </a>
                </div>
                {/* Trait blanc entre les deux sections */}
                <div className="h-12 border-l border-amber-100 mx-4"></div>
                <nav className="grid gap-1 text-md md:text-xl pl-4">
                    <a href="#home" className="font-ubuntu hover:transition-all hover:scale-105">Accueil</a>
                    <a href="#equipe" className="font-ubuntu hover:transition-all hover:scale-105">Présentation</a>
                    <a href="#nouscontacter" className="font-ubuntu hover:transition-all hover:scale-105">Nous contacter</a>
                    <a href="https://www.helloasso.com/associations/karibu-uge/adhesions  /formulaire-adhesion" 
                       className="font-ubuntu hover:transition-all hover:scale-105">Nous rejoindre</a>
                </nav>
            </div>
            <div className="border-t border-amber-100 my-4"></div>
            <p className="text-center text-sm md:text-xl text-white mt-4">© {new Date().getFullYear()} Copyright Karibu UGE, tous droits réservés.</p>
        </footer>
    )
}