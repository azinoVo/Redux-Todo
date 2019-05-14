import React, { Component } from 'react';
import {connect} from 'react-redux';

class ToDoList extends Component {
    render() {
        return (
            <div className='todo-list'>
                {this.props.todo.map(todo => {
                    return <div>{todo.name}</div>
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}

export default connect(mapStateToProps, {})(ToDoList);