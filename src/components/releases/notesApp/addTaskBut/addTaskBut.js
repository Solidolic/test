import React from 'react'


export default class AddTaskBut extends React.Component {
    render() {
        return (
            <input type="button" value="Add" className="add-task-button" onClick={this.props.addTask}/>
        )
    }
}
