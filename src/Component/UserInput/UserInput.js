import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <h1>This is User Input</h1>
            <input defaultValue={props.defaultValue} onChange={props.onChange}/>
        </div>
    )
}

export default UserInput;