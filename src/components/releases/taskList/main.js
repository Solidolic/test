import React, { Component } from 'react'
import NotesApp from './components/notesApp/notesApp';

export default class ToDo extends Component {
    
    render() {
        return (<NotesApp />, document.getElementById('content')
        )
    }
}
