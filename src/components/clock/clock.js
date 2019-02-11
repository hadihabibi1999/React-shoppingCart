import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props){
    super(props);
    this.state={
      time: new Date()
  }
}
  currentTime(){
    this.setState({
     time: new Date()
    })
  } 
 componentWillMount(){
   setInterval(()=>this.currentTime(),1000)
  } 

  render() {
    return (
      <div className="App" style={{textAlign:'center'}}>
      <div  style ={ { backgroundImage: "url('https://wallpapercave.com/wp/oePE9lU.jpg')" } }>
        <p style={{color:"#9ED9F5",fontSize:40,paddingTop:15}}> local Time: </p>
        <h1 style={{color:"skyblue",fontSize:50,paddingBottom:8}}>{this.state.time.toLocaleTimeString()}</h1>
      </div>
      </div>
    );
  }
}

