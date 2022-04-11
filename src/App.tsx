import React, {Component} from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Nav/>
        </div>
    );
}

export default App;


class Nav extends Component<{}, {
    firstName: string
}> {
    constructor() {
        super({})
        this.state = {
            firstName: 'Stranger'
        }
    }

    render() {
        const modelObject = {
            firstName: this.state.firstName,
            setFirstName: (input: string) => this.setState({firstName: input})
        }

        return (
            <div>
                Hello, {this.state.firstName}
                <ChildButton model={modelObject}/>
            </div>
        )
    }
}


class ChildButton extends Component<{ model: { [key: string]: any } }> {
    render() {
        return (
            <button onClick={() => this.props.model.setFirstName('Dave')}>
                Change name from {this.props.model.firstName} to Dave
            </button>
        )
    }
}
