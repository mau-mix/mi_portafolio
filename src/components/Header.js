import React from 'react'
import styles from './Header.module.css'
import icono from '../icono.png'

const Header = ({ titulo }) => {

  return (

    <div className={ styles.cont_header }> 
        <div className={ styles.header}>
            <img  
                src={icono}
                alt='logo'
                className={ styles.icono}
              />

                <h1 className={ styles.titulo }>{ titulo }</h1>
        </div>
       
    </div>
  )
}

export default Header