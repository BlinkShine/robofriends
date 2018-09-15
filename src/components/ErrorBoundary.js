import React, { Component } from 'react';
// this ErrorBoundary show to viewer if the page has broken but in developer mode it's not show it

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	hasError: false
        }
    }

    componentDidCatch(error,info) {
    	this.setState({ hasError: true})
    }

    render() {
    	if (this.state.hasError) {
	        return <h1>Oops. That is not good</h1>
    	}
    	return this.props.children
    }
}

export default ErrorBoundary;
