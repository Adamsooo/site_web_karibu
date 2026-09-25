import { NAVIGATION } from "../config";

export const MenuMobile = ({menuOpen,setMenuOpen}) => {
    return (
        <div id="menu-mobile"
             className={`fixed z-30 top-20 left-0 w-full
                        flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                        backdrop-blur-lg bg-amber-950/90 text-amber-100
                        text-2xl font-ubuntu
                        ${
                        menuOpen
                        ? 'h-[calc(100dvh-5rem)] opacity-100 pointer-events-auto'
                        : 'h-0 opacity-0 pointer-events-none invisible'}
                        `}>
            <nav className="flex flex-col items-center gap-8">
                {NAVIGATION.map(({ href, label }) => (
                    <a key={href}
                       href={href}
                       onClick={()=>setMenuOpen(false)}
                       className={`hover:underline hover:scale-110
                                   transition-all duration-500
                                   ${
                                       menuOpen
                                       ? 'opacity-100 translate-y-0'
                                       : 'opacity-0 translate-y-5'
                                   }`}>
                        {label}
                    </a>
                ))}
            </nav>
        </div>
    )
}

export default MenuMobile;
