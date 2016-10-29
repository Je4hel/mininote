import React, { Component } from 'react';
import '../resources/App.css';
import NavPanel from "./NavPanel";
import TextEditor from "./TextEditor";

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            allNotes: [],
            openNote: props.openNote || null
        }
    }

    render() {
        return (
            <div className="App">
                <NavPanel items={this.state.allNotes}/>
                <TextEditor content={this.state.openNote ? this.state.openNote.content : ""}/>
            </div>
        );
    }
}

export default App;
