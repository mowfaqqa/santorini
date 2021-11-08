import React from 'react'
import style from './showcase.module.css'
import video from './showcaseAsset/santorini_vid.mp4'

const Showcase = () => {
   return (
      <section className={style.banner}>
         <video autoPlay loop muted className={style.videoSection}>
               <source src={video} type="video/mp4"/>
         </video>
         <div className={style.bannerSection}>
         <div className="container">

         </div>
         <div className="container p-2">
            <div className={style.bannerContent}>
               <h1 className="text-light">Santorini Restaurant</h1>
               <p className="card-subtitle text-light px-3">Experince Oia and it's beauty in Abuja...</p>
            </div>
         </div>
         </div>
      </section>
   )
}

export default Showcase
