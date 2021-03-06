import React, { Component } from 'react';
class Counter extends Component {
    render() { 
       
        return(
             <div>
                
                 <span className={this.color()}>{this.formatCounter()}</span>
                 <button onClick={ ()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                 <button onClick={ ()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
             </div> 
        );
    }

     color() {
        let classes = "badge m-2 badge-";
        classes+= (this.props.counter.value===0) ? "warning" : "primary";
        return classes;
    }

    formatCounter(){
         const {value} = this.props.counter;
         return value===0 ? "zero" : value; 
    }

}

export default Counter;



