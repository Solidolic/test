import React from 'react'
import DefaultState from '../defaultState/defaultState'


export default class Task extends React.Component{
    render() {
        return (
            <div className="task">
                <p>{this.props.task}</p>
                <DefaultState onChangElemState={this.props.onChangeElemState} isSelected={this.props.done} color={this.props.done ? '#44c767':'#d0712e'}/>
                <span className="delete-task" onClick={this.props.onDelete}> x </span>
            </div>
        )
    }
}
