import { Home } from './components/sections/Home'
import { Evenements } from './components/sections/Evenements'
import { Equipe } from './components/sections/Equipe'
import { Phototheque } from './components/sections/Phototheque'
import { NousContacter } from './components/sections/NousContacter'
import { Layout } from './components/Layout'

function App() {
  return (
    <Layout>
      <Home />
      <Evenements />
      <Equipe/>
      <Phototheque />
      <NousContacter/>
    </Layout>
  );
}
export default App
