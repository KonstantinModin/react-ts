import React, { useState } from 'react';
import './App.css';
import UserInput from '../UserInput/';
import UserOutput from '../UserOutput/';

function App() {
    const [myState, setMyState] = useState('Initial Value');

    const inputHandler = ({ target }) => {
        setMyState(target.value);
        console.log(target, myState);
    }

    return (
        <div className="App">
            <h1>Hooks + Events</h1>
            <UserInput defaultValue={myState} onChange={inputHandler}/>
            <UserOutput output={myState} />
        </div>
    );
}

export default App;
