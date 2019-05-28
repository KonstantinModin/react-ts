import React from 'react';
import './CharComponent.css';

const CharComponent = ({char, click}) => {
    return (
        <div className="CharComponent" onClick={click}>
        <h3>{char}</h3>
        </div>
    )
}

export default CharComponent;