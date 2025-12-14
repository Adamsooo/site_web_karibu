import { useState } from 'react'
import { Home } from './components/sections/Home'
import { Navbar } from './components/Navbar'
import { MenuMobile } from './components/MenuMobile'
import { Footer } from './components/Footer'
import { Evenements } from './components/sections/Evenements'
import { Equipe } from './components/sections/Equipe'
import { NousContacter } from './components/sections/NousContacter'
import { Analytics } from "@vercel/analytics/react"
import { Taille } from './components/sections/Taille'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
  <>
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MenuMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home />
      {/* <Taille/> */}
      <Evenements />
      <Equipe/>
      <NousContacter/>
      <Footer />
    </div>
  </>
);
}
export default App