import React, { Component } from 'react';
import './PersonItem.css';

export default class PersonItem extends Component {
    state = {
        hasError: false
    }   

    render() {
        if (this.state.hasError) {
            this.foo.bar = 0;
        }

        return (
            <div className="PersonItem">
                <h3>{this.props.name}</h3>
                <p>That guy has an age of {this.props.age}</p>
                <input defaultValue={this.props.name} onChange={this.props.change} />
                <button onClick={this.props.click}>Delete me!</button>
                <button onClick={() => this.setState({hasError: true})}>Error</button>
                
            </div>
        )
    }

}