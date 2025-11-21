import { useState } from 'react'
import { Home } from './components/sections/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Evenements } from './components/sections/Evenements'
import { Equipe } from './components/sections/Equipe'
import { NousContacter } from './components/sections/NousContacter'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div>
      <Navbar />
      <Home />
      <Evenements />
      <Equipe/>
      <NousContacter/>
      <Footer />
    </div>
  </>
);
}

export default App
