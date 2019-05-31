import React, { useState, Component } from 'react';
import classes from'./App.css';
import UserInput from '../UserInput/';
import UserOutput from '../UserOutput/';
import PersonItem from '../PersonItem';
import ValidationComponent from '../ValidationComponent';
import CharComponent from '../CharComponent';
import ErrorBoundary from '../ErrorBoundary';
import PersonList from '../PersonList';

const App = () => {
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
        console.log(event, id);
        const personIndex = personsList.findIndex(person => person.id === id);
        const newPerson = {...personsList[personIndex], name: event.target.value};
        setPersonsList([...personsList.slice(0, personIndex), newPerson, 
            ...personsList.slice(personIndex + 1)]);        
    };

    const showMeHandler = () => setToggleBool(!toggleBoll);

    const [inputValue, setInputValue] = useState('');
    const lastInputHandler = ({target}) => {
        setInputValue(target.value);
    }
    const charComponentHandler = (index) => {
        const newValue = inputValue.slice(0, index) + inputValue.slice(index + 1);
        setInputValue(newValue);
    }

    return (
        
        <div className={classes.App}>
            <input value={inputValue} onChange={lastInputHandler} />
            <p>{inputValue.length}</p>
            <p>{inputValue}</p>
            <ValidationComponent inputLength={inputValue.length} />
            {inputValue.split``.map((char, index) => <CharComponent 
                    char={char} 
                    click={() => charComponentHandler(index)}
                    />
            )}

            <ErrorBoundary>
                <UserInput defaultValue={myState} onChange={inputHandler}/>
            </ErrorBoundary>

            <ErrorBoundary>
                <UserOutput output={myState} />
            </ErrorBoundary>

            <button onClick={showMeHandler}>Show me!</button>            
                {toggleBoll ? <PersonList 
                    list={personsList} 
                    delete={(id) => deleteHandler(id)} 
                    change={(event, id) => handleChange(event, id)}
                    /> : null}
           
        </div>
        
    );
}

export default App;
