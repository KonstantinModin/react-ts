import React, {Component} from 'react';
import classes from './UserOutput.css';

export default class UserOutput extends Component {
    state = {
        hasError: false
    }

    maxErrorhandler = () => {
        throw new Error('Max Error!');
    }

    render() {
        if (this.state.hasError) {
            this.foo.bar = 0
        }
        
        return (
            <div className={classes.UserOutput}>
                <h1>This is User Output</h1>
                <h2>{this.props.output}</h2>
                <button onClick={() => this.setState({hasError: true})}>Right Error </button>
                <button onClick={this.maxErrorhandler}>Max Error</button>
            </div>
        )
    }    
}