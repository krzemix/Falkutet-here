import React from 'react'

interface ButtonProps{
    
    onNumberChange:() => void;
    name:string;
}

const Przycisk:React.FC<ButtonProps> =({onNumberChange,name}) =>{

    return (<div><button onClick={onNumberChange}>{name}</button></div>);
}
export default Przycisk;