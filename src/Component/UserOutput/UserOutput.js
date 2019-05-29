import React from 'react';
import classes from './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className={classes.UserOutput}>
            <h1>This is User Output</h1>
            <h2>{props.output}</h2>
        </div>
    )
}

export default UserOutput