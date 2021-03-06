import React, { Component } from 'react';
import Counter from './counter';

export default class Counters extends Component {
 
    render() { 
        return (
          <div>
            <button 
            onClick={this.props.onReset}
            className="btn btn-sm btn-primary m-2">Reset</button>
            {this.props.counters.map((counter) => (
            <Counter
            key={counter.id} 
            onDelete={this.props.onDelete} 
            counter={counter}
            onIncrement={this.props.onIncrement}
             />
            ))}
            </div>
            );
    }
} 