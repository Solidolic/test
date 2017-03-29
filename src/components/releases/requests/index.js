import React from 'react';
import {singUpToServer} from './sessions/session';
import TaskList from './Task/taskList';

export default class Main extends React.Component{
    constructor (props){
        super(props)
    };

    componentWillMount() {
        singUpToServer();
    };

    render(){
        return (
            <TaskList />
        )
    }
}

