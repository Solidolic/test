import React from 'react'
import Style from '../../../../routes/notesApp/notesApp.css'


export default class AddTaskBut extends React.Component {
    render() {
        return (
            <input type="button" value="Add" className={Style.addTaskButton} onClick={this.props.addTask}/>
        )
    }
}
