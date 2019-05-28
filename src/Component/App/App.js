import React, { useState } from 'react';
import './App.css';
import UserInput from '../UserInput/';
import UserOutput from '../UserOutput/';
import PersonItem from '../PersonItem';

function App() {
    const [myState, setMyState] = useState('Initial Value');
    const [personsList, setPersonsList] = useState([
        {id: 223, name: 'Jhon', age: 32},
        {id: 224, name: 'Garold', age: 58},        
        {id: 226, name: 'Federique', age: 39},
    ]);
    const [toggleBoll, setToggleBool] = useState(false);

    const inputHandler = ({ target }) => {
        setMyState(target.value);
        console.log(target, myState);
    }

    const deleteHandler = (id) => {    
        const personIndex = personsList.findIndex(person => person.id === id);
        setPersonsList([...personsList.slice(0, personIndex), ...personsList.slice(personIndex + 1)]);       
    }; 

    const handleChange = (event, id) => {
        const personIndex = personsList.findIndex(person => person.id === id);
        const newPerson = {...personsList[personIndex], name: event.target.value};
        setPersonsList([...personsList.slice(0, personIndex), newPerson, 
            ...personsList.slice(personIndex + 1)]);        
    };

    const showMeHandler = () => setToggleBool(!toggleBoll);

    return (
        <div className="App">
            <h1>Hooks + Events</h1>            
            <UserInput defaultValue={myState} onChange={inputHandler}/>
            <UserOutput output={myState} />
            <button onClick={showMeHandler}>Show me!</button>
            {toggleBoll ? personsList.map(person => {
                return (            
                    <PersonItem 
                        key={person.id} 
                        name={person.name} 
                        age={person.age} 
                        click={() => deleteHandler(person.id)}
                        change={(event) => handleChange(event, person.id)}
                    />
                );
            }) : null}
        </div>
    );
}

export default App;
