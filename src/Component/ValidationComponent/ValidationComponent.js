import React from "react";

import "./ValidationComponent.css";

const ValidationComponent = ({ inputLength }) => {
    return (
        <div className="ValidationComponent">
            <h3>
                Your input has length of <strong>{inputLength}</strong>
            </h3>
            {inputLength < 5 ? (
                <p>Text is to short</p>
            ) : inputLength < 15 ? (
                <p>Text is fine</p>
            ) : (
                <p>Text is too big</p>
            )}
        </div>
    );
};

export default ValidationComponent;
