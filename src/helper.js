

import FormMuestra from "./components/FormMuestra";
import Login from "./components/Login";
export function ElegirPantallas( pantallas ) {
   
     let resultado;
    
    switch( pantallas ) {
        case "formulario":
          resultado = (<FormMuestra />)
            break;
        case "login":
          resultado = (<Login />)
            break
      
    default:
            break        
    }
      
    return resultado;
}
