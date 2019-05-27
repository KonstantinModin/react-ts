import React from 'react';
import './PersonItem.css';

const PersonItem = (props) => {
    console.log(props);
    return (
        <div className="PersonItem">
            <h3>{props.name}</h3>
            <p>That guy has an age of {props.age}</p>
            <input defaultValue={props.name} onChange={props.change} />
            <button onClick={props.click}>Delete me!</button>
            
        </div>
    )

}

export default PersonItem;