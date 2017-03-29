import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Styles from '../../main.css';


export default class AddTaskButton extends React.Component{
    constructor (props){
        super(props)
    };

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    };
    
    
    render(){
        const style = {
            display: 'inline-block',
            margin: '16px 32px 16px 0'
        };
        
        return(
            <div className={Styles.addTaskButton}>
                <FloatingActionButton style={style} onClick={this.props.addTask}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}

AddTaskButton.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

    
