import React from 'react'
import styles from './Login.module.css'

const Login = () => {

     return (

          <div className={ styles.contenedor}>
               <div className={ styles.descripcion}>

                    <h3>Registrarse</h3>
                    
                         <p>It is a long established fact that a reader fj
                            will be distracted by the readable content d 
                            a page when looking at its layout. The point hj
                            of using Lorem k Ipsum is that it has a more-or-less gg
                            ss normal h g distribution letters, as opposed to using
                            h here, contentj  here', making it look 
                            readable gh English. Many desktop</p>
                    
                    <a href='!#'>leer mas sobre noosotros</a>

               </div>
               <div className={ styles.fomulario}>
                    <p>registrarse</p>
                    <div className={ styles.cont_input}>
                         <label>nombre</label>
                         <input 
                              type='text'
                              placeholder='Nombre'
                         />
                    </div>
                    <div className={ styles.cont_input}>
                         <label>contraseña</label>
                         <input 
                              type='password'
                              placeholder='Contraseña'
                         />
                    </div>
                    <button>ENVIAR</button>
                    <a href='!#'>Obtener una cuenta</a>
               </div>
          </div>
    )
}
 export default Login