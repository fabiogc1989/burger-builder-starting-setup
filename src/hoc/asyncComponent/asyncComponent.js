import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    debugger;
    return class extends Component{
        state = {
            component: null
        }

        componentDidMount(){
            importComponent().then(cmp => {
                debugger;
                this.setState({component: cmp.default});
            })
        }

        render(){
            const C = this.state.component;
            debugger;
            return C ? <C {...this.props} /> : null;
        }
    };
};

export default asyncComponent;