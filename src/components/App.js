import React, { Component } from 'react';
import '../resources/App.css';
import NavPanel from "./NavPanel";
import TextEditor from "./TextEditor";

class App extends Component {
    constructor () {
        super();
        this.state = {
            allNotes: [],
            openNote: null
        }
    }

    render() {
        return (
            <div className="App">
                <NavPanel items={this.state.allNotes}/>
                <TextEditor />
            </div>
        );
    }
}

export default App;
