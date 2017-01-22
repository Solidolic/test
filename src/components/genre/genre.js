import React, { Component } from 'react'
import NotesApp from '../../routes/notesApp/notesApp';

export default class Genre extends Component {
    render() {
        return <div className='row'>
            <h3>{this.props.params.genre}</h3>
            <div></div>
            <NotesApp />
        </div>;
    }
}