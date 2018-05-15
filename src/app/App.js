import React, { Component } from 'react';
import { Router, Switch, Redirect } from "react-router-dom"
import '../App.css';

import Header from "./partials/header";
import LandingPage from "./landing_page/landingPage";


class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <Header/>
        </header>
        <main className="container">
          <div className="row">
        <LandingPage/>
          </div>
        </main>
      {/* <Switch>
         
      </Switch> */}
        </React.Fragment>
    );
  }
}

export default App;



  

 
