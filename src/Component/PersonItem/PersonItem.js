import React, { useState, useContext } from "react";
import classes from "./PersonItem.css";
import AuthContext from "../../context/authContext";

const PersonItem = (props) => {
    const [hasError, setHasError] = useState(false);
    const myContext = useContext(AuthContext);

    if (hasError) {
        this.foo = 0;
    }

    return (
        <div className={classes.PersonItem}>
            {myContext ? (
                <>
                    <h3>{props.name}</h3>
                    <p>That guy has an age of {props.age}</p>
                    <input defaultValue={props.name} onChange={props.change} />
                    <button onClick={props.click}>Delete me!</button>
                    <button onClick={() => setHasError(!hasError)}>
                        Error
                    </button>
                </>
            ) : (
                <h2>You should Log in First!</h2>
            )}
        </div>
    );
};
export default PersonItem;
