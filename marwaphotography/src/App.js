import React, { Component} from 'react';
import './App.css';
import Welcome from './Welcome/Weclome';
import About from './About/About'

class App extends Component{
  render(){
  return (
    <div className="App">
      <About />
    </div>
  );
}
}
export default App;
