import React, { useEffect } from 'react';
import classes from './UserInput.css';

const UserInput = (props) => {
    useEffect(() => {
        console.log('useEfect! setup');
        return () => {
            console.log('cleaning');

        }
    }, []);

    return (
        <div className={classes.UserInput}>
            <h1>This is User Input</h1>
            <input defaultValue={props.defaultValue} onChange={props.onChange}/>            
        </div>
    )
}

export default UserInput;