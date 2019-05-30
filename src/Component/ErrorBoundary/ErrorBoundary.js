import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorM: '',
        msg: ''
    };

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true, 
            errorM: error, 
            msg: info});
    }
    
    
    render() {
        if (this.state.hasError) {
            return  (
                <div>
                    <h2>We got a problem here </h2>
                    <h3>Error:{this.state.errorM}</h3>
                    <h3>Info:{this.state.msg}</h3>
                </div>
            )
        } else {
            return this.props.children; 
        }
           
    }
}