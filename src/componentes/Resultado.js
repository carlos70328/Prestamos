import React from 'react'

const Resutaldo = ({Total, Plazo, Cantidad}) => (
    <div className = "u-full-width resultado">
        <h2>Resumen</h2>
        <p>La cantidad solicitada es : $ {Cantidad}</p>
        <p>A pagar en {Plazo} meses</p>
        <p>Su pago mensual es de : $ {(Total/Plazo).toFixed(2)}</p>
        <p>Total a pagar : & {Total}</p>

    </div>

        
 );
 
export default Resutaldo;