import React from 'react';
import Task from './task';
import Style from '../main.css';
import CreateTask from '../Task/createTask/index';
import {getData} from '../api/getData';


export default class TaskList extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            notes: []
        }
    };

    componentWillMount() {
        getData().then(list => this.setState({notes: list.tasks}));
    };
    
    render(){
        return this.state.notes.length ? (
            <div className={Style.nodes}>
                {
                    this.state.notes.map(function (note, i) {
                        return (
                            <Task 
                                key={i}
                                title={note.Task.title}
                                date={note.Task.created_at}
                                id={note.Task.id}
                            />
                        )
                    })
                }
            <CreateTask />
            </div>
        ) : null
    }
}
