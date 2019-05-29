import React from 'react';
import classes from './CharComponent.css';

const CharComponent = ({char, click}) => {
    return (
        <div className={classes.CharComponent} onClick={click}>
        <h3>{char}</h3>
        </div>
    )
}

export default CharComponent;