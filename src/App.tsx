import Hero from './components/Hero'
import Services from './components/Services'
import Caracteristicas from './components/Caracteristicas'
import QuienesSomos from './components/QuienesSomos'
import ComoFunciona from './components/ComoFunciona'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Services />
      <Caracteristicas />
      <QuienesSomos />
      <ComoFunciona />
      <Footer />
    </div>
  )
}

export default App
