import React, {useState, Fragment} from 'react';
import {calcularTotal} from "./herpers";

const Formulario  = (props) => {
   
    const {Cantidad, guardarCantidad, Plazo , guardarPlazo, guardarTotal, guardarCargando} = props;
    //definir -state+
    const [error, guardarError] = useState(false)
    //Cuando el usuario hace clic en calcular
    const calcularPrestamo =e=>{
        e.preventDefault();

        //Validar
        if(Cantidad === 0 || Plazo === "") {

            guardarError (true);
            return;
        }
            //eliminar error
            guardarError(false);

        //habilitar Spiner
            guardarCargando(true)
        setTimeout(() => {
             //realizar cotizacion
            const Total = calcularTotal(Cantidad, Plazo)

            //una vez calculado guadar total
            guardarTotal (Total);  

            //desabilitar spiner
            guardarCargando(false)
        }, 3000);
      

        

    }
   
    return (  
        
        <Fragment>
             <form onSubmit={calcularPrestamo}>
                    <div className="row">
                        <div>
                            <label>Cantidad Prestamo</label>
                            <input 
                                className="u-full-width" 
                                type="number" 
                                placeholder="Ejemplo: 3000" 
                                onChange={ e=>guardarCantidad(parseInt(e.target.value)) }
                            />
                        </div>
                        <div>
                            <label>Plazo para Pagar</label>
                            <select 
                                className="u-full-width"
                                onChange={ e=>guardarPlazo(parseInt(e.target.value)) }
                            >
                                <option value="">Seleccionar</option>
                                <option value="3">3 meses</option>
                                <option value="6">6 meses</option>
                                <option value="12">12 meses</option>
                                <option value="24">24 meses</option>
                            </select>
                        </div>
                        <div>
                            <input 
                                type="submit" 
                                value="Calcular" 
                                className="button-primary u-full-width" 
                            />
                        </div>
                    </div>
            </form>
            {(error) ?  <p className= "error">Todos los campos son obligatorios</p> : null}
           
        </Fragment>
    );
    
}
 
export default Formulario;