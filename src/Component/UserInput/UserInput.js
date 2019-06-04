import React, { useEffect } from 'react';
import classes from './UserInput.css';

const UserInput = (props) => {
    
    
    useEffect(() => {
        console.log('useEfect! setup');
        console.log(inputRef);
        console.log(inputRef.current);
        inputRef.current.focus();
        return () => {
            console.log('cleaning');

        }
    }, []);    
    
    const inputRef = React.createRef();

    return (
        <div className={classes.UserInput}>
            <h1>This is User Input</h1>
            <input 
                defaultValue={props.defaultValue} 
                onChange={props.onChange}
                ref={inputRef}
            />            
        </div>
    )
}

export default UserInput;