import React from 'react'

export default class NotesApp extends React.Component {
    getInitialState() {
        return {
            notes: [],
            filteredNotes: [],
            stateFilter: {
                0: false,
                1: false,
                2: false
            }
        }
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        var url = 'http://rygorh.dev.monterosa.co.uk/todo/items.php';
        var xhr = new XMLHttpRequest(),
            temp = [];

        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE ) {
                if(xhr.status == 200){
                    temp = JSON.parse(xhr.responseText);

                    temp.forEach(function (item, i) {
                        item.id = i;
                    }.bind(this))

                    this.setState({notes: temp});
                }
            }
        }.bind(this);

        xhr.open("GET", url, true);
        xhr.send();
    }

    taskDeleteHandler(task) {
        var taskId = task.id;
        var newTasks = this.state.notes.filter(function(note) {
            return note.id !== taskId;
        });
        this.setState({ notes: newTasks });
    }


    addTaskHandler(newTask) {
        var newList = this.state.notes.slice();
        newList.unshift(newTask);
        this.setState({notes: newList});
    }

    changeStateFilter(itemsState) {
        this.setState({filterConfig: Object.assign(this.state.stateFilter, itemsState)});
    }

    showFilteredNotes() {
        var arr = [];
        var showInProgress = this.state.stateFilter[0];
        var showDone = this.state.stateFilter[1];
        var showNew = this.state.stateFilter[2];

        this.state.notes.forEach(function (item) {
            if (!item.state){
                if(showInProgress && !showDone && !showNew) {
                    if (item.done == 0) {
                        arr.push(item);
                    }
                }
                if (!showInProgress && showDone && !showNew) {
                    if (item.done == 1) {
                        arr.push(item);
                    }
                }
                if (showInProgress && showDone && !showNew) {
                    if (item.done == 1 && item.done == 0) {
                        arr.push(item);
                    }
                }
            } else {
                if(!showInProgress && !showDone && showNew){
                    if (item.state == showNew){
                        arr.push(item);
                    }
                }
                if (showInProgress && !showDone && showNew){
                    if (item.done == 0 && item.state){
                        arr.push(item);
                    }
                }
                if (!showInProgress && showDone && showNew){
                    if (item.done == 1 && item.state){
                        arr.push(item);
                    }
                }
                if (showInProgress && showDone && showNew) {
                    if ((item.done == 1 || item.done == 0) && item.state){
                        arr.push(item);
                    }
                }
                if (!showInProgress && !showDone && !showNew) return
            }
        }.bind(this))

        if (!arr.length){
            return this.state.notes
        }
        return arr
    }

    onChangeStateHandler(elem) {
        this.state.notes.forEach(function (item) {
            debugger
            if (item.id == elem.id){
                if(item.done){
                    item.done = false;
                } else {
                    item.done = true;
                }
            }
        })
        this.setState({notes: this.state.notes});
        console.log(this.state.notes);
    }

    render() {
        return  this.state.notes.length ? (
            <div className="notes-app">
                <TaskMenu onTaskAdd={this.addTaskHandler}/>
                <Selection onChangeBox={this.changeStateFilter}/>
                <TaskList notes={this.showFilteredNotes()} onTaskDelete={this.taskDeleteHandler} onChangeState={this.onChangeStateHandler}/>
            </div>
        ) : null
    }
}
