import React, { Component } from 'react';
import "./App.css";

class App extends Component {

  
  state = { 
    num:0
   } 

   increment=()=>{

    //since num is a state var it cannot be changed simply
    //setState is an already defined function by react

    this.setState({num:this.state.num+1});

   }

   
   decrement=()=>{
    this.setState({num:this.state.num-1})
   }



  render() { 
    
    return (
    <div className='App'>
      <div className='showcase'>
        <h1>{this.state.num}</h1>
        <button onClick={this.increment}>Add</button>
        <button onClick={this.decrement}>Sub</button>

      </div>

    
    </div>
    
    );
  }
}
 
export default App;




