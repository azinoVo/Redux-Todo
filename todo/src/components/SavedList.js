import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteRandom, salvageItem} from '../actions'

class savedList extends Component {
    constructor() {
        super();
        this.state = {
            kraken: "Your Kraken looks very happy."
        }
    }

    
    deleteRandom = id => {
        this.props.deleteRandom(id)
        if (this.props.health === 90){
            this.setState({kraken:"Your Kraken looks upset."})}
        
        if (this.props.health === 70){
            this.setState({kraken:"Your Kraken looks pale."})}
    
        if (this.props.health === 50){
            this.setState({kraken:"Your Kraken just threw up."})}

        if (this.props.health === 30){
            this.setState({kraken:"Your Kraken doesn't look too good."})}

        if (this.props.health === 20){
            this.setState({kraken:"Your Kraken looks unresponsive."})}

        if (this.props.health === 5){
            this.setState({kraken:"Your Kraken has died."})
            alert("Your Kraken has died. If you did your chores, Krakkie would still be alive.");
            window.location.reload();
        }
    }

    salvage = name => {
        this.props.salvageItem(name)
    }

    render() {
        
        return (
            <React.Fragment>
                <h1>Davy Jones' Locker</h1>
                <div className='saved'>
                {this.props.saved && this.props.saved.map(saved => {
                        return <h4 key={saved.id}>
                            {saved.name} <i class="fas fa-anchor" onClick={() => this.salvage(saved.name)}></i>
                        </h4>
                    })}
                </div>
                <button onClick={() => this.deleteRandom(Math.round(Math.random() * this.props.count.length))}>Feed the Kraken! </button>
                <p>Kraken HP: {this.props.health}</p>
                <p>{this.state.kraken}</p>
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
        saved: state.saved,
        count: state.count,
        health: state.health
    }
}

export default connect(mapStateToProps, {deleteRandom, salvageItem})(savedList);