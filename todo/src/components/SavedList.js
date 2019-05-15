import React, { Component } from 'react';
import { connect } from 'react-redux';

class savedList extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        
        return (
            <React.Fragment>
                <h1>Procrastination Pool</h1>
                <div className='saved'>
                {this.props.saved && this.props.saved.map(saved => {
                        return <h4 key={saved.id}>
                            {saved.name}
                        </h4>
                    })}
                </div>
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    // todo below is the same as the todo in this.props.todo.map() from the render above
    // this allows the todo to be available from state to be used as props here
    // the reducer in the store returned the state to be used when we are connected
    return {
        saved: state.saved
    }
}

export default connect(mapStateToProps, {})(savedList);