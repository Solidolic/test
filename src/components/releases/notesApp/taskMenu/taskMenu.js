import React from 'react'
import AddTaskButton from '../addTaskBut/addTaskBut'


export default class TaskMenu extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            text: '',
            done: 1
        };
    }

    onChangeHandler(event) {
        this.setState({text: event.target.value});
    }

    addTaskHandler() {
        var newTask = {
            task: this.state.text,
            color: 'yellow',
            id: Math.random(),
            state: true,
            done: this.state.done,
        };

        if (this.state.text){
            this.props.onTaskAdd(newTask);
            this.setState({text: ''});
        }
    }

    isChanged() {
        this.state.done ? this.setState({done: 0}) : this.setState({done: 1});
    }
    
    render() {
        return (
            <div className="task-menu">
                <textarea  row={1} className="textarea" placeholder="Enter your task here..."  value={this.state.text} onChange={this.onChangeHandler}/>
                <div>
                    <select value={this.state.state} isSelected={this.props.done} onChange={this.isChanged}>
                        <option value="1">done</option>
                        <option value="0">in progress</option>
                    </select>
                    <AddTaskButton addTask={this.addTaskHandler}/>
                </div>
            </div>

        )
    }
}
