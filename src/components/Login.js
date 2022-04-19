import React from 'react'
import styles from './Login.module.css'

const Login = () => {

     return (

          <div className={ styles.contenedor}>
               <div className={ styles.descripcion}>

                    <h3>Registrarse</h3>
                    <div>
                         <p>It is a long established fact that a reader 
                         will be distracted by the readable content of 
                         a page when looking at its layout. The point 
                         of using Lorem Ipsum is that it has a more-or-less 
                         normal distribution of letters, as opposed to using
                         'Content here, content here', making it look like
                         readable English. Many desktop</p>
                    </div>
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
                    <button>Enviar</button>
                    <a href='!#'>Obtener una cuenta</a>
               </div>
          </div>
    )
}
 export default Login