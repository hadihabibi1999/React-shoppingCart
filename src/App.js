import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';
import Clock from "./components/clock/clock";
import Calculator from "./calculator";

class App extends Component {
  state = { 
    counters:[
        { id:1 , value:0},
        { id:2 , value:0},
        { id:3 , value:0},
        { id:4 , value:0}
    ]
 }
 handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
 }
 handleReset=()=>{
    const counters = this.state.counters.map(c=>{
        c.value=0;
        return c;
    });
    this.setState({counters});
 };

 deleteHandler = counterId => {
   const counters = this.state.counters.filter(c=>c.id!==counterId);
   this.setState({counters});
 };
  render() {
    return (
     
      <div  style ={ { height:672,backgroundImage: "url('data:image/jpeg;base64,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')" } }>
          <Clock/>
        <Navbar totalCounters = {this.state.counters.filter(c=>c.value>0).length}/>
          <main className="container" style={{padding:70}}>
            <Counters
              onDelete={this.deleteHandler} 
              counters={this.state.counters}
              onIncrement={this.handleIncrement}
              onReset={this.handleReset}
              />
          </main>
       <Calculator/>
     </div>
    );
  }
}
export default App;
