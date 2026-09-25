import { Home } from './components/sections/Home'
import { Evenements } from './components/sections/Evenements'
import { Equipe } from './components/sections/Equipe'
import { NousContacter } from './components/sections/NousContacter'
import { Layout } from './components/Layout'

function App() {
  return (
    <Layout>
      <Home />
      <Evenements />
      <Equipe/>
      <NousContacter/>
    </Layout>
  );
}
export default App
