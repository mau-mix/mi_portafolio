import React from 'react'
import styles from './Seccion.module.css'
import Formulario from './Formulario'
import Form from './Form'
import Login from './Login'


const Seccion = ({mostrar, setMostrar }) => {
          
  
  return (
    <div className={ styles.cont_seccion }>

      <h1>Hola soy Mauricio Campos <span> y estos son algunos de mis proyectos</span></h1>
    
         <Formulario 
                  
                  setMostrar={ setMostrar }
         />
         
         {mostrar && mostrar.length ? (

           <Form />
         ) : null }
         
        
    </div>
  )
}

export default Seccion