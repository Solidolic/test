import React from 'react'

export default class TaskList extends React.Component{
    componentDidMount() {
        var grid = this.refs.grid;
        this.msnry = new Masonry( grid, {
            itemSelector: '.task',
            columnWidth: 100,
            gutter: 20,
            isFitWidth: true
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    render() {
        var onTaskDelete = this.props.onTaskDelete,
            onChangeState = this.props.onChangeState;
        return (
            <div className="task-list" ref="grid">
                {
                    this.props.notes.map(function (note) {
                        return (
                            <Task
                                key={note.id}
                                task={note.task}
                                done={+note.done}
                                onDelete={onTaskDelete.bind(null, note)}
                                onChangeElemState={onChangeState.bind(null, note)}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
