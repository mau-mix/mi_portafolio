import React from 'react'
import styles from './FormFormik.module.css'

const Alerta = ( {children} ) => {
  return (
    
        <div className={ styles.alerta}> 
           { children}
      </div> 
    
  )
}

export default Alerta