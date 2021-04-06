import React, {Fragment} from 'react';



const Header = ({titulo, descripcion}) => {
    return (  

        <Fragment>
            <h1>{titulo }</h1>
            <p>{ descripcion}</p>
        </Fragment>
    );
}
 


export default Header;