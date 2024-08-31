import {useState} from 'react';
import Button from './Button';

function Calculador() {
    {/*const [displayValue] = useState('0');*/}
    const [displayValue, setDisplayValue] = useState('0');

    return(
        <div>
            <div>{displayValue}</div>
            {/*Aquí irán los botones de la calculadora*/ }
            <Button value="1" onClick={() => setDisplayValue(displayValue + '1')} />
            <Button value="+" onClick={() => console.log('Lógica para la suma')} />
        </div>
    );
}

export default Calculador;
