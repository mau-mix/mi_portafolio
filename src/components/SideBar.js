import React from 'react'
import styles from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={styles.sidebar }>

           <h2 className={styles.titulo_proyectos}>mis proyectos</h2>
           
           <div className={ styles.cont_enlaces }>
                <a
                    href='°#'
                      className={styles.enlaces}
                      >Organizador de Citas
                </a>

                <a
                    href='°#'
                    className={styles.enlaces}
                      >Buscador de Bebidas
                </a>

                <a 
                    href='!#' 
                    className={styles.enlaces}
                       >control presupuesto
                </a>

                <a
                     href='!#' 
                     className={styles.enlaces}
                       >letras de canciones
                </a>
            </div>

    </div>
  )
}

export default SideBar