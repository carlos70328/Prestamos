import React, {Fragment, useState}  from 'react';
import './App.css';
import Header from "./componentes/Header"
import Formulario from "./componentes/Formulario"
import Mensaje from "./componentes/Mensaje"
import Resultado from "./componentes/Resultado"
import Spiner from "./componentes/Spiner"



function App() {
  //definir State
  const [Cantidad, guardarCantidad]= useState(0);
  const [Plazo, guardarPlazo]= useState("");
  const [Total, guardarTotal] = useState (0);
  const [Cargando, guardarCargando] = useState(false);

  let componente;

  if (Cargando){

    componente = <Spiner />
  } else if (Total ===0){
    componente = <Mensaje/>

  }else{
    componente = <Resultado
                    Total = {Total}
                    Plazo = {Plazo}
                    Cantidad = {Cantidad}
    
    />

  }



  return (
    <Fragment>
       <Header
            titulo = "Cotizador de Prestamos"    
            descripcion = "Utiliza el  formulario y obten cotizacion"   
       />

       <div className = "container">
            <Formulario
              Cantidad= {Cantidad}
              guardarCantidad = {guardarCantidad}
              Plazo={Plazo}
              guardarPlazo = {guardarPlazo}
              Total = {Total}
              guardarTotal = {guardarTotal}
              guardarCargando = {guardarCargando}

            />
            <div className = "mensajes">
              {componente}
            </div>
          
       </div>
       
    </Fragment>
  );
}

export default App;
