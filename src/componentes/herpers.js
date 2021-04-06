export function calcularTotal(Cantidad, Plazo){

   let TotalCantidad;
    if (Cantidad <= 1000){
        TotalCantidad = Cantidad*.25;
    }else if (Cantidad > 1000&& Cantidad <=5000){
        TotalCantidad = Cantidad*.20
    }else if (Cantidad > 5000&& Cantidad <=10000){
        TotalCantidad = Cantidad*.15
    }else {
        TotalCantidad = Cantidad*.10
    }

    let totalPlazo = 0;

    switch (Plazo){
        case 3:
            totalPlazo=Cantidad*.05;
        break;
            case 6:
                totalPlazo=Cantidad*.10;
            break;
                case 12:
                    totalPlazo=Cantidad*.15;
                 break;
                    case 24:
                        totalPlazo=Cantidad*.20;
                    break;
        default:
            break;

    }

    return totalPlazo + TotalCantidad + Cantidad;
}