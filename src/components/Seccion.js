import styles from './Seccion.module.css'
import Formulario from './Formulario'
import { useState } from 'react';

const Seccion = ({ setEligiendoPantalla }) => {
   
    const [ mostrar, setMostrar ] = useState("")
       
  return (
    <div className={ styles.cont_seccion }>

      <h1>Hola soy Mauricio Campos <span> y estos son algunos de mis proyectos</span></h1>
    
         <Formulario 
           setEligiendoPantalla={setEligiendoPantalla}       
            setTele={setMostrar}     
         />
         <div>{mostrar}</div>
   </div>
  )
}

export default Seccion