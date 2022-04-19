import React from 'react'
import styles from './FormMuestra.module.css'

const FormMuestra = () => {

  return (
      <div className={ styles.contenedor}>
            <h3>hola bienvenido</h3>
            <form className={ styles.cont_form }>
              
                  <div className={ styles.cont_input }>
                      <label>Usuario</label>
                       <input 
                            type="text"
                            placeholder='Ingres nombre de usuario'
                        />
                   </div> 
                   <div className={ styles.cont_input }>
                      <label>telefono</label>
                       <input 
                            type="text"
                            placeholder='Ingrese telefono'
                        />
                   </div> 

                   <div className={ styles.cont_input }>
                      <label>E-email</label>
                        <input 
                             type="email"
                       />
                   </div>

                   <div className={ styles.cont_input }>
                      <label>Password</label>
                        <input 
                            type="password"
                        />
                   </div> 
                                        
           </form>
                   <button>Iniciar sesion</button>
   </div>
  )
}

export default FormMuestra