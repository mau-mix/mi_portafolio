import { useState } from 'react';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Seccion from "./components/Seccion";

function App() {

      const [ mostrar, setMostrar ] = useState([])
              
  return (
        <div>
             <Header 
                   titulo="mi portafolio"
             />
             <div className="contenedor">
                  <SideBar />
                  <Seccion 
                         setMostrar={ setMostrar }
                         mostrar={ mostrar }
                  />
            </div>
        </div>
  )
}

export default App;
