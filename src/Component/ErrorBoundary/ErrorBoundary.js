import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: '',
        info: ''        
    };

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true, 
            errorMessage: error,
            info: info
        });        
    }    
    
    render() {        
        if (this.state.hasError) {  
            console.log(typeof this.state.errorMessage);
            console.log(this.state.errorMessage);
            console.log(this.state.info);

            return  (
                <div>
                    <h2>We got a problem here </h2>
                    <h3>{this.state.errorMessage.toString()}</h3>                    
                    <h3>Info:{this.state.info.componentStack}</h3>                    
                </div>
            )
        }         
        return this.props.children;
    }
}