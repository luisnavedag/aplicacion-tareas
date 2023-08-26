import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario({ onSubmit }){

    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value);
    }

    const manejarEnvio = e =>{
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
    onSubmit(tareaNueva);
    setInput('')
}

    return(
        <form className="tarea-formulario" onSubmit={manejarEnvio}
        >
            <input 
            type="text" 
            className='tarea-input'
            placeholder='Escribe una Tarea'
            name='texto'
            onChange={manejarCambio}
            />
             <button type='submit'
        className='tarea-boton'>
            Agregar Tarea
            </button>
        </form>
    );
}

export default TareaFormulario;