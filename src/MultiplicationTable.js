import React from "react";

function MultiplicationTable ()
{
    const arr = [1,2,3,4,5,6,7,8,9,10];
    let row = [];
    for(let i of arr)
    {
        for(let j of arr)
        {
            let total = i * j;
            let text = `${j} * ${i} = ${total}`
            row.push( <span>{text}</span>);
        }
    }

    return (
        <div className='contentContainer container'>{row}</div>
    );
}

export default MultiplicationTable;
