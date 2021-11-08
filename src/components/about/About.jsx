import React from 'react'
import styled from 'styled-components'
import img from './aboutAsset/bg-santorini.jpg'
import style from './about.module.css'

const About = () => {
   return (
      <>
         <Aboutdiv className="my-5">
         <Div className="p-4 shadow-lg">
               <h2 className="text-center qahiri display-3">About Us</h2>
               <p className="card-subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quidem quas eveniet. Repellat quas, magni expedita impedit in dolores illum commodi, aut perspiciatis tempora voluptates porro quaerat mollitia, obcaecati ipsum iure. Nostrum voluptatum excepturi nihil nemo, nesciunt nobis minus quaerat!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi, temporibus unde enim fuga tempora quasi illum ipsa mollitia fugit vitae aliquid quod sed dicta harum exercitationem quam ea deserunt!
               </p>
         </Div> 
         </Aboutdiv>
         <img src={img} alt="bg-img" className={style.image}/>
      </>
   )
}

export default About

const Aboutdiv = styled.div `
`
const Div = styled.div ` 
   width: 85%;
   background: #fff;
   margin: auto;
   border-radius: 1rem;
`