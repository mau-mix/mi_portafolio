import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import styles from './FormFormik.module.css'
import Alerta from './Alerta'
 
const FormFormik = () => {

    const nuevoClienteSchema = yup.object().shape({
        nombre: yup.string()
                   .min(3, "el nombre es muy corto")
                   .max(20, "el nombre es muy largo")
                   .required("el nombre del cliente es obligatorio"),
        empresa: yup.string()
                    .required("El nombre de la empresa es obligatorio"),
        email: yup.string() 
                   .email("email no valido")           
                   .required("el email es obligatorio"),
        telefono:yup.number()
                  .positive("Numero no valido")
                  .integer("Numero no valido")
                  .typeError("El numero no es valido")           
  
    })

    const handleSubmit = (valores) => {
          console.log(valores)
    }
  return (
    <div className={ styles.contenedor}
    >
        <div className={ styles.titulo }>
            <h1>Agregar Cliente</h1>
        </div>
        
        
            <Formik initialValues={{
                nombre: "",
                empresa: "",
                email: "",
                telefono: "",
                notas: ""
             }}
             onSubmit={(values) => {
                 handleSubmit(values)
             }}
             validationSchema={ nuevoClienteSchema }
            >
                {({errors, touched }) => {
                       console.log(touched)
                    return (
                 <Form 
                      className={ styles.cont_form}
                 >
                     <div className={ styles.cont_input}>
                         <label
                              htmlFor='nombre'
                             >Nombre: </label>
                         <Field 
                               id="nombre"
                               type="text"
                               name="nombre"
                               placeholder="Nombre del Cliente"
                        />
                               { errors.nombre && touched.nombre ? (
                                   <Alerta>{ errors.nombre }</Alerta>
                                 ) :  null
                             }
                     </div>
                     <div className={ styles.cont_input}>
                         <label
                               htmlFor='empresa'
                              >Empresa: </label>
                         <Field 
                               id="empresa"
                               type="text"
                               name="empresa"
                               placeholder="Nombre de la Empresa"
                         />
                          { errors.empresa && touched.empresa ? (
                                   <Alerta>{ errors.empresa }</Alerta>
                                 ) :  null
                             }
                     </div>
                     <div className={ styles.cont_input}>
                         <label
                               htmlFor='email'
                               >Email: </label>
                         <Field 
                               id="email"
                               type="email"
                               name="email"
                               placeholder="Email del Cliente"
                         />
                              { errors.email && touched.email ? (
                                   <Alerta>{ errors.email }</Alerta>
                                 ) :  null
                             }
                     </div>
                     <div className={ styles.cont_input}>
                         <label
                              htmlFor='telefono'
                             >Telefono: </label>
                         <Field 
                               id="telefono"
                               type="tel"
                               name="telefono"
                               placeholder="Telefono del Cliente"
                         />
                          { errors.telefono && touched.telefono ? (
                                   <Alerta>{ errors.telefono }</Alerta>
                                 ) :  null
                             }
                     </div>
                 
                     <input 
                          type="submit"
                          value="Agregar Cliente"
                          className={ styles.submit}
                     />
                </Form>
                )}}
           </Formik>       
    </div>
  )
}

export default FormFormik