import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';

export default class Login extends React.Component {
    constructor(){
        super()
    }

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    };
    
    onCancelClickHandler = (e) => {
        e.preventDefault();
        this.context.router.push(`/`);
    };
    
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.onCancelClickHandler}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={true}
            />
        ];
        
        return (
            <div>
                <Dialog
                    title="Login/Password"
                    actions={actions}
                    modal={true}
                    open={true}
                >
                    <TextField
                        hintText="Name"
                        floatingLabelText="Name"
                        type="name"
                    /><br />
                    <TextField
                        hintText="Password"
                        floatingLabelText="Password"
                        type="password"
                    />
                </Dialog>
            </div>
            
        )
    }
}

Login.contextTypes = {
    router: PropTypes.object.isRequired
}

Login.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};