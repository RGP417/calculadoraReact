import react from 'react';
import '../stylesheets/Boton.css';

const BotonClear = (props) => (
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
)

export default BotonClear;