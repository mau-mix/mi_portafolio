import Formulario from "./components/Formulario";
import Login from "./components/Login";

export function selecTecnologia( tecnologias ) {
    
    switch( tecnologias ) {
        case "formulario":
           <Formulario />
            break;
        case "login":
            <Login />
            break
    default:
            break        
    }
    return tecnologias
}