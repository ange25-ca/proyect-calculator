import {useState} from 'react';
import Button from './Button';

function Calculador() {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState<string | null>(null);
    const [firstOperand, setFirstOperand] = useState<number | null>(null);

function handleNumberClick(value: string) {
    setDisplayValue(displayValue === '0' ? value : displayValue + value);
}

function handleOperationClick(newOperator: string){
    if(firstOperand === null){
        setFirstOperand(parseFloat(displayValue));
        setOperator(newOperator);
        setDisplayValue('0');
    } else {
        calculate();
        setOperator(newOperator);
    }
}

    function calculate(){
        if (firstOperand !== null && operator !== null){
            const secondOperand = parseFloat(displayValue);
            switch (operator){
                case '+':
                    setDisplayValue((firstOperand + secondOperand).toString());
                    break;
                case '-':
                    setDisplayValue((firstOperand - secondOperand).toString());
                    break;
                case '*':
                    setDisplayValue((firstOperand * secondOperand).toString());
                    break;
                case '/':
                    setDisplayValue((firstOperand / secondOperand).toString());
                    break;
            }
            setFirstOperand(null);
            setOperator(null);
        }
    }

    return(
        <div>
            <div>{displayValue}</div>
            {/*Aquí irán los botones de la calculadora*/ }
            <Button value="1" onClick={() => setDisplayValue(displayValue + '1')} />
            <Button value="+" onClick={() => console.log('Lógica para la suma')} />
            <Button value="1" onClick={() => handleNumberClick('1')} />
            <Button value="+" onClick={() => handleOperationClick('+')} />
        </div>
    );
}

export default Calculador;
