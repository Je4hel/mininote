import React, { Component } from 'react';
import Counter from "./Counter"
import logo from '../resources/logo.svg';
import '../resources/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <Counter start={8} />
                </p>
            </div>
        );
    }
}

export default App;
