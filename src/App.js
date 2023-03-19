import './App.css';
import logo192 from './images/logo192.png';
import Boton from './components/Boton.js';
import Pantalla from './components/Pantalla.js';
import BotonClear from './components/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor =>{
    setInput(input + valor);
  };

  const calcularRes = () => {
    if (input) {
    setInput(evaluate(input));} else{alert("Por favor ingrese valores")}
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        src={logo192}
        className='logo'
        alt='logo' /><h1>ReactApp</h1>
      </div>
      <div className='main'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={calcularRes}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
