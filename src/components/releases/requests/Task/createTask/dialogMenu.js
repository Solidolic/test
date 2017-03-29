import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {postData} from '../../api/postData';
import {getData} from '../../api/getData';
import $ from "jquery";


export default class DialogMenu extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            open: false,
            fieldTaskRequired: '',
            fieldDescriptionRequired: '',
            counter: 0,
            taskValue: '',
            descriptionValue: ''
            
        }
    };

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    };

    componentWillReceiveProps (newProps) {
        this.setState({open: newProps.open})
    };

    onCancelClickHandler = () => {
        this.setState({open: false, counter: 0})
    };

    onBlurHandler = (e) => {
        e.preventDefault();
        let fieldText = e.target.value,
            fieldType = e.target.getAttribute('type');
        
        switch (fieldType){
            case 'task' :
                fieldText === '' ? this.setState({fieldTaskRequired: 'This field is required'}) 
                    : this.setState({fieldTaskRequired: '', counter: this.state.counter +1, taskValue: fieldText});
                break;
            case 'description' :
                fieldText === '' ? this.setState({fieldDescriptionRequired: 'This field is required'}) 
                    : this.setState({fieldDescriptionRequired: '', counter: this.state.counter +1, descriptionValue: fieldText});
                break;
            default:
                break;
        }
        
        e.stopPropagation();
    };

    checkInputsValue = () => {
        return this.state.counter >= 2 ? false : true;
    };

    onSubmitClickHandler = () => {
        fetch('https://private-anon-9b168665de-testfrontend1.apiary-mock.com/tasks/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Project: {
                    id: Math.random()
                },
                Task: {
                    title: this.state.taskValue,
                    description: this.state.descriptionValue
                }
            })
        }).then(function(res){ return res.json(); })
            .then(console.log);
        
        this.setState({open: false})
    };
    
    
    render(){
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.onCancelClickHandler}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={this.checkInputsValue()}
                onClick={this.onSubmitClickHandler}
            />
        ];
        
        return(
            <div>
                <Dialog
                    title="Create Task"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <TextField
                        hintText="Task"
                        type="task"
                        onBlur={this.onBlurHandler.bind(this)}
                        errorText={this.state.fieldTaskRequired}
                    /><br />
                    <TextField
                        hintText="Description"
                        type="description"
                        onBlur={this.onBlurHandler.bind(this)}
                        errorText={this.state.fieldDescriptionRequired}
                    />
                </Dialog>
            </div>
        )
    }
}

DialogMenu.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

    

