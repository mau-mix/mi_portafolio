

import FormFormik from "./components/FormFormik";
import FormMuestra from "./components/FormMuestra";
import Login from "./components/Login";
export function ElegirPantallas( pantallas ) {
   
     let resultado;
    
    switch( pantallas ) {
        case "formulario":
          resultado = (<FormFormik />)
            break;
        case "login":
          resultado = (<Login />)
            break
      
    default:
            break        
    }
      
    return resultado;
}
