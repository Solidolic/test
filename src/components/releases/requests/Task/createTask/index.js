import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AddTaskButton from './addTaskButton';
import DialogMenu from './dialogMenu';

export default class CreateTask extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            open: false
        }
    };
    
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    };

    addTasHandler () {
        this.setState({open: true})
    };
    
    
    render(){
        return(
            <div>
                <AddTaskButton addTask={this.addTasHandler.bind(this)}/>
                <DialogMenu open={this.state.open}/>
            </div>
        )
    }
}

CreateTask.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

    
