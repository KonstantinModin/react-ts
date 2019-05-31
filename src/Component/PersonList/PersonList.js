import React from 'react';
import PersonItem from '../PersonItem';
import ErrorBoundary from '../ErrorBoundary';

const PersonList = (props) => props.list.map(person => {
        return (            
            <ErrorBoundary key={person.id} >
                <PersonItem                                              
                    name={person.name} 
                    age={person.age} 
                    click={() => props.delete(person.id)}
                    change={() => props.handleChange(person.id)}
                />
            </ErrorBoundary>
            
        );
    })  


export default PersonList;