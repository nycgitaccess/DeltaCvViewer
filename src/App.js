import React, { Component } from 'react';
import {Sidebar} from './components/sidebar/sidebar';
import TopNav from './components/topNavigation/topNav';
import Body from './components/body/box';
class App extends Component {
  render() {
    return (
      <div className="App">
          <TopNav />
          <Sidebar /> 
          <Body/>
        
      </div>  
    );
  }
}

export default App;
