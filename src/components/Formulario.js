import { useState } from 'react'
import styles from './Formulario.module.css'
import Error from './Error'

const Formulario = ({ setMostrar }) => {
      
    const [ error, setError ] = useState( false )
    
    const [tecnologias, setTecnologias ]  = useState([
           { formulario: "", id: 1},
           { login: "", id: 2}
   ])
       
    const { formulario, login } = tecnologias     
    
    const onChange = e => {
        setTecnologias([
            ...tecnologias,
            e.target.value
        ])
    }
           
  const onSubmit = e => {
      e.preventDefault()
      if( formulario === "" || login === "") {
          setError( true )
          return
      }
      setMostrar( tecnologias )
     
  }
 
  return (
      <div>
           <form 
                 onSubmit={ onSubmit }
                 className={ styles.formulario}>
                 {error && <Error mensaje = "Seleccione una Opcion" />}
                <select 
                        onChange={ onChange }
                        name="tecnologias"
                        id="tecnologias"
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