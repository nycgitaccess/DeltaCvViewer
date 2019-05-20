import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import {Sidebar} from './components/sidebar/sidebar';
import TopNav from './components/topNavigation/topNav';
import Body from './components/body/body';
import Data from './components/body/data/cvSunmmaryInfo'
import Footer from "./components/Footer/Footer"
import Login from './components/signInOrUp/login'
import SignUp from './components/signInOrUp/signUp'
import PdfViwer from './components/pdfViwer/pdfV'
import Userprofile from './components/Usersprofiles/Userprofile';
import AboutUs from './components/About/AboutUs'

class App extends Component {
  constructor(){
    super()
    this.state= {
      cvSummerys: Data,
      sidebarItem : ['Html', 'Css', 'JavaScript','Node', 'DataBase', 'React'],
      IsLoggedIn: true,
    } 
    this.Login= this.Login.bind(this) 
  }
  Login(){
    return(<h1>Welcome to the Login page</h1>)
  } 
  render() {     
    return (
       <BrowserRouter>
      <div className="App">
          <TopNav loginStatus={this.state.IsLoggedIn} key='its working'/>
          <Sidebar item={this.state.sidebarItem}/> 
          {this.state.cvSummerys.map(cvSummery =>{
            return(<Body cvSummery={cvSummery}/>)
            })}
            {/* <Route  path='/' component={App}/> */}
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/pdf" component={PdfViwer} />
              <Route path="/profile" component={Userprofile}/> 
              <Route path="/About" component={AboutUs}/>
              {/* <Route component={Error} /> */}
          <Footer/>
      </div>  
      </BrowserRouter>
    );
  }
}


export default App; 
