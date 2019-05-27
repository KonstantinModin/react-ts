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

    const inputHandler = ({ target }) => {
        setMyState(target.value);
        console.log(target, myState);
    }

    const deleteHandler = ({target}) => {console.log(target)}; 
    const handleChange = (event, id) => {
        const personIndex = personsList.findIndex(person => person.id === id);
        console.log(personIndex);

        const newPerson = {
            ...personsList[personIndex]
        };
        newPerson.name = event.target.value;

        // const pers = [...personsList];
        // pers[personIndex] = newPerson;

        setPersonsList([...personsList.slice(0, personIndex), newPerson, ...personsList.slice(personIndex + 1)]);
        // console.log(personsList);
    };

    return (
        <div className="App">
            <h1>Hooks + Events</h1>
            <UserInput defaultValue={myState} onChange={inputHandler}/>
            <UserOutput output={myState} />
            {personsList.map(person => {
                return (            
                    <PersonItem 
                        key={person.id} 
                        name={person.name} 
                        age={person.age} 
                        click={deleteHandler}
                        change={(event) => handleChange(event, person.id)}
                    />
                );
            })}
        </div>
    );
}

export default App;
