import React from 'react'
import styles from './Footer.module.css'
import watsapp from '../watsapp.png'

const Footer = () => {
  return (

    <div className={ styles.cont_footer}>
         
              <img 
                  src={ watsapp }
                  alt='watsapp'
              />
              <a href='https://wa.me/525536543265?text=hola'>Contactame</a>
    </div>
  )
}

export default Footer