import Hero from './components/Hero'
import Services from './components/Services'
import Caracteristicas from './components/Caracteristicas'
import QuienesSomos from './components/QuienesSomos'
import ComoFunciona from './components/ComoFunciona'
import QueOfrecemos from './components/QueOfrecemos'
import Proximamente from './components/Proximamente'
import Registro from './components/Registro'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Services />
      <Caracteristicas />
      <QuienesSomos />
      <ComoFunciona />
      <QueOfrecemos />
      <Proximamente />
      <Registro />
      <Footer />
    </div>
  )
}

export default App
