import React, { Component } from 'react';
import classes from './PersonItem.css';
import AuthContext from '../../context/authContext';

export default class PersonItem extends Component {
    state = {
        hasError: false
    }   

    render() {
        if (this.state.hasError) {
            this.foo.bar = 0;
        }

        return (
            <div className={classes.PersonItem}>                                  
                <AuthContext.Consumer>
                    {(context) =>  context ? 
                        <><h3>{this.props.name}</h3>
                            <p>That guy has an age of {this.props.age}</p>
                            <input defaultValue={this.props.name} onChange={this.props.change} />
                            <button onClick={this.props.click}>Delete me!</button>
                            <button onClick={() => this.setState({hasError: true})}>Error</button></>
                    : <h2>You should Log in First!</h2> }
                </AuthContext.Consumer>                            
            </div>
        )
    }
}