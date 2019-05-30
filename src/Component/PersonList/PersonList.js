import React from 'react';
import PersonItem from '../PersonItem';
import ErrorBoundary from '../ErrorBoundary';

const PersonList = (props) => {
    return (
        props.list.map(person => {
            return (            
                <ErrorBoundary>
                <PersonItem 
                    key={person.id}                           
                    name={person.name} 
                    age={person.age} 
                    click={() => props.delete(person.id)}
                    change={(event, id) => props.handleChange(event, person.id)}
                />
                </ErrorBoundary>
                
            );
        })
    )
}

export default PersonList;