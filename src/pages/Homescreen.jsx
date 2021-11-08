import React from 'react'
import About from '../components/about/About'
import Footer from '../components/footer/Footer'
import Gallery from '../components/gallery/Gallery'
import Menucomponent from '../components/menu/Menucomponent'
import Reservation from '../components/reservation/Reservation'
import Services from '../components/services/Services'
import Showcase from '../components/showcase/Showcase'

const Homescreen = () => {
   return (
      <>
         <Showcase />
         <About />
         <Services />
         <Menucomponent />
         <Reservation />
         <Gallery />
         <Footer />
      </>
   )
}

export default Homescreen
