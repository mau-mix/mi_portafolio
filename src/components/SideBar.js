import React from 'react'
import styles from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={styles.sidebar }>

           <h2>mis proyectos</h2>
           
           <div className={ styles.cont_enlaces }>
                <a
                    href='https://visionary-semifreddo-bde2d2.netlify.app'
                       
                      >Organizador de Citas
                </a>

                <a
                    href='https://fancy-pothos-6d35b5.netlify.app'
                   
                      >Control presupuesto
                </a>

                <a 
                    href='https://strong-bubblegum-e735b6.netlify.app' 
                   
                       >Frases Breaking Bad
                </a>

                <a
                     href='https://steady-rugelach-abfbd1.netlify.app/' 
                     
                       >cotizador de autos
                </a>
            </div>
    </div>
  )
}

export default SideBar