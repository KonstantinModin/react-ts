import React from 'react';
import './PersonItem.css';

const PersonItem = (props) => {
    console.log(props);
    const errorButtonHandler = (e) => {
        throw new Error(`Error 548 in button ${e.target}`)
    }

    return (
        <div className="PersonItem">
            <h3>{props.name}</h3>
            <p>That guy has an age of {props.age}</p>
            <input defaultValue={props.name} onChange={props.change} />
            <button onClick={props.click}>Delete me!</button>
            <button onClick={errorButtonHandler}>Error</button>
            
        </div>
    )

}

export default PersonItem;