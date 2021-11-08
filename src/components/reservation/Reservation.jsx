import React from 'react'
import style from './reservation.module.css'

const Reservation = () => {
   return (
      <>
       <section className={`${style.bg} p-3`}>
       <div className="container">
       <h1 className="qahiri display-4 text-light text-center">Make Reservations</h1>
         <form>
            <div className={`${style.formGroup}`}>
               <label htmlFor="name" className="text-light pb-2 d-block"> Name :</label>
               <input type="text" name="name" required/>
            </div>
            <div className={`${style.formGroup}`}>
               <label htmlFor="phone" className="text-light pb-2 d-block"> Phone Number :</label>
               <input type="text" name="phone" required/>
            </div>
            <div className={`${style.formGroup}`}>
               <label htmlFor="table" className="text-light pb-2 d-block"> Table for :</label>
               <input type="number" required/>
            </div>
            <div className={`${style.formGroup}`}>
               <label htmlFor="date-time" className="text-light pb-2 d-block"> Date/time :</label>
               <input type="datetime-local" required/>
            </div>
            <div className={`${style.formGroup}`}>
               <label htmlFor="Message" className="text-light pb-2 d-block"> Message :</label>
               <textarea name="message" id="message" cols="30" rows="10" placeholder="type in your message or type in order ahead of time (Optional)"></textarea>
            </div>
            <button type="submit" className={`${style.button}`}>Make Booking</button>
         </form>
       </div>
       </section>  
      </>
   )
}

export default Reservation
