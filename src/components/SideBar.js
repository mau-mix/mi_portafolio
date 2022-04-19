import React from 'react'
import styles from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={styles.sidebar }>

           <h2 className={styles.titulo_proyectos}>mis proyectos</h2>
           
           <div className={ styles.cont_enlaces }>
                <a
                    href='https://visionary-semifreddo-bde2d2.netlify.app'
                      className={styles.enlaces}
                      >Organizador de Citas
                </a>

                <a
                    href='°#'
                    className={styles.enlaces}
                      >Buscador de Bebidas
                </a>

                <a 
                    href='https://strong-bubblegum-e735b6.netlify.app' 
                    className={styles.enlaces}
                       >Imagenes Breaking Bad
                </a>

                <a
                     href='https://steady-rugelach-abfbd1.netlify.app/' 
                     className={styles.enlaces}
                       >cotizador de autos
                </a>
            </div>

    </div>
  )
}

export default SideBar