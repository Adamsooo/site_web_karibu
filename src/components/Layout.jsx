{/* Structure commune à toutes les pages : navigation, pied de page,
    bandeau cookies et mesure d'audience (chargée seulement après consentement) */}

import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Navbar } from "./Navbar";
import { MenuMobile } from "./MenuMobile";
import { Footer } from "./Footer";
import { BandeauCookies } from "./BandeauCookies";
import { useConsentement } from "../consentement";

export const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const consentement = useConsentement();

    return (
        <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MenuMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main>{children}</main>
            <Footer />

            {consentement === null && <BandeauCookies />}
            {consentement === "accepte" && (
                <>
                    <Analytics />
                    <SpeedInsights />
                </>
            )}
        </>
    );
};

export default Layout;
