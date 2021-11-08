import React from 'react'
import img from './asset/image-3.png'
import style from './footer.module.css'
const Footer = () => {
   return (
      <>
      <footer className={`${style.footer} bg-light py-5`}>
      <div className="d-flex justify-content-center pt-3">
         <img src={img} alt="footerimg" />   
         <h5 className="qahiri mx-2">Santorini</h5>
      </div>
      <div>
         <h6 className="roboto fs-4">Contact Us</h6>
            <li>07067091391</li>
            <li>Santorini@gmail.com</li>
            <li>5 Kwaji close, Maitama, Abuja, NG.</li>
      </div>
      <div>
         <h6 className="roboto fs-4">Social Media</h6>
         <i className="fab fa-instagram fs-3 mx-2"></i>
         <i className="fab fa-twitter fs-3 mx-2"></i>
         <i className="fas fa-envelope fs-3 mx-2"></i>
      </div>
      </footer>
      <p className="text-center fs-3"> &copy; Santorini Restaurant, 2021</p>
      </>
   )
}

export default Footer
