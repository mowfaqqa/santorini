import React from 'react'
import { imageData } from './galleryData'
import style from './gallery.module.css'

const Gallery = () => {
   return (
      <>
        <div className={`${style.image}`}>
           {imageData.map( item => {
              return ( 
                  <img src={item} alt="Gallery"/>
              )
           })}
        </div> 
      </>
   )
}

export default Gallery