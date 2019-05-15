import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, finishTask, deleteTask, saveTask } from '../actions'

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            newToDo: ''
        }
    }

    handleChanges = event => {
        this.setState({
            newToDo: event.target.value
        })
        console.log(this.state.newToDo);
    }

    addTask = event => {
        event.preventDefault();
        // this.state.newToDo is the payload for the addTask function
        this.props.addTask(this.state.newToDo)
        this.setState({newToDo: ''})
    }

    finish = id => {
        this.props.finishTask(id)
    }

    delete = () => {
        this.props.deleteTask()
    }

    save = name => {
        this.props.saveTask(name)
    }

    render() {
        
        return (
            <React.Fragment>
                <h1>To-Do List</h1>
                <div className='todo-list'>
                    {this.props.todo && this.props.todo.map(todo => {
                        return <h4 className={`${todo.completed}`} key={todo.id} onClick={() => this.finish(todo.id)}>
                            {todo.name} <button onClick={() => this.save(todo.name)}>Save</button>
                        </h4>
                    })}
                </div>
                <form onSubmit={this.addTask}>
                    <input
                        type="text"
                        value={this.state.newToDo}
                        onChange={this.handleChanges}
                        placeholder="...task"
                    />
                    <button onClick={this.addTask}>Add to List</button>
                </form>
                <button onClick={this.delete}>Delete All Selected</button>
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => {
    // console.log(state);
    // todo below is the same as the todo in this.props.todo.map() from the render above
    // this allows the todo to be available from state to be used as props here
    // the reducer in the store returned the state to be used when we are connected
    return {
        todo: state.todo,
    }
}

export default connect(mapStateToProps, { addTask, finishTask, deleteTask, saveTask })(ToDoList);