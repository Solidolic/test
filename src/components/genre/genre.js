import React, { Component } from 'react'
import NotesApp from '../../routes/notesApp/notesApp';
import App from '../../routes/connectionsTestTask/app';

export default class Genre extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            app: this.props.params.release
        }
    }

    
    render() {
        let application;
        switch (this.state.app) {
            case 'notesApp' :
                application = (
                    <div>
                        <NotesApp />
                    </div>
                )
                break;
            case 'connectionsTask' :
                application = (
                    <div>
                        <App />
                    </div>
                )

        }
        return application;
    }
}
