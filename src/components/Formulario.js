import { useState } from 'react'
import styles from './Formulario.module.css'
import Error from './Error'
import { ElegirPantallas } from '../helper'

const Formulario = ({setEligiendoPantalla, setTele}) => {
    const [ error, setError ] = useState( false )
    const [ pantallas, setPantallas ]  = useState("")

    const { seleccionar } = pantallas     

    const selecPantalla = (e) => {
        setPantallas(e.target.value)
    }
    
    const onSubmit = e => {
        e.preventDefault()
        if(pantallas === "") {
            setError( true )
            return
            
        }
         setError(false)
         setEligiendoPantalla(pantallas)
         const   resultado = ElegirPantallas(pantallas)
         setTele(resultado)
            
    }

 
  return (
      <div>
           <form 
                 className={ styles.formulario}
                 onSubmit={ onSubmit }
            >
                 {error && <Error mensaje = "Seleccione una Opcion" />}
            <select 
                        name="seleccionar"
                        value={ seleccionar }
                        onChange={ selecPantalla }
                >
                    <option value="">--Selecciona--</option>
                    <option value="formulario">Formulario</option>
                    <option value="login">Login</option>
                   
            </select>
                    
                <input 
                    type="submit"
                    value="mostrar"
                />
            </form> 
      </div>
    
  )
}

export default Formulario