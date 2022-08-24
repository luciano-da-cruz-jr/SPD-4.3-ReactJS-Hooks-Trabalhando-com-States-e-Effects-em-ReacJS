import React, {useState, useEffect} from 'react';

export default function Ifoodcounter()
{
    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState()

    useEffect(()=> 
    {
        document.getElementById("moeda").innerHTML = 12.00 * value
    },[value])

    function down()
    {
        if(value <= 1)
        {
            setButtonStyle("counter-button-minus-desactive")
        }

        if (value> 0) 
        {
            setValue(value-1)    
        }
    }

    function up() 
    {
        setValue(value+1)
        setButtonStyle("counter-button-minus-active")
    }

    return (
        <>
            <button className={buttonStyle} onClick={down}>-</button>
            <p>{value}</p>
            <button className={buttonStyle} onClick={up}>+</button>
            <span id='moeda'></span>
        </>
    )
}

 