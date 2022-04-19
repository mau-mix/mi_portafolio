import { useState } from 'react';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Seccion from "./components/Seccion";
import Footer from './components/Footer';

function App() {
     
      const [ eligiendoPantalla, setEligiendoPantalla ]= useState("")
           
  return (
        <div className="contenedor">
            <div>
                 <Header 
                        titulo="mi portafolio"
                 />
            </div>
            <div className='contenido'>
                  <SideBar />
                  <Seccion 
                         setEligiendoPantalla={setEligiendoPantalla}
                         eligiendoPantalla={eligiendoPantalla}
                  />
             </div>
            <div>
                  <Footer />
            </div>
        </div>
  )
}

export default App;
