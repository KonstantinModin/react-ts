import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <h1>This is User Output</h1>
            <h2>{props.output}</h2>
        </div>
    )
}

export default UserOutput