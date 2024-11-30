import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import ServiceSec from "./components/ServiceSec/ServiceSec"
import ServiceSec2 from "./components/ServiceSec/ServiceSec2"
import TrustSec from "./components/TrustSec/TrustSec"


const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServiceSec />
      <ServiceSec2 />
      <TrustSec />
      <Footer />
    </main>
  )
}

export default App