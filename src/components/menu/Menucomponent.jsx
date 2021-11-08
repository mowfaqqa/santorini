import React from 'react'
import style from './Menu.module.css'
import img1 from './menuassests/img1.png'
import img2 from './menuassests/img2.png'
import img3 from './menuassests/img3.png'
import img4 from './menuassests/img4.png'

const Menucomponent = () => {
   const imgdata = [
      img1,
      img2,
      img3,
      img4
   ]
   return (
      <>
        <div className={`${style.bg} mt-3`}>
            <h1 className="text-center text-light qahiri display-1">OUR MENU</h1>
            <div className={`${style.menu} row text-center mx-auto`}>
            {imgdata.map(item => {
                  return (
                        <img src={item} alt="menuImg" className="col-sm-12 col-lg-6 mx-auto py-2"/>
                  )
               }
            )}
            </div>
        </div> 
      </>
   )
}

export default Menucomponent
