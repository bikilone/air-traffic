import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import '../App.css';

import Header from "./partials/header";
import LandingPage from "./landing_page/landingPage";
import MainPage from "./main_page/mainPage"


class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <Header/>
        </header>
        <main className="container">
          <div className="row">
        {/* <LandingPage/> */}
          </div>
        </main>
         <Redirect from="/" to="/landingPage"/>
         <Route path="/mainPage" component={MainPage}/>
         <Route path="/landingPage" component={LandingPage}/>
        </React.Fragment>
    );
  }
}

export default App;



  

 
