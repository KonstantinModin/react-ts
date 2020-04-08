import React from "react";
import PersonItem from "../PersonItem";
import ErrorBoundary from "../ErrorBoundary";
import PropTypes from "prop-types";

const PersonList = (props) =>
    props.list.map((person) => {
        return (
            <ErrorBoundary key={person.id}>
                <PersonItem
                    name={person.name}
                    age={person.age}
                    click={() => props.delete(person.id)}
                    change={(event) => props.change(event, person.id)}
                />
            </ErrorBoundary>
        );
    });

PersonList.propTypes = {
    list: PropTypes.array,
    delete: PropTypes.func,
    change: PropTypes.func,
};
export default PersonList;
