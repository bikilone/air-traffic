import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import '../App.css';

import Header from "./partials/header";
import LandingPage from "./landing_page/landingPage";
import MainPage from "./main_page/mainPage"
import DetailsPage from "./details_page/detailsPage"


class App extends Component {
    constructor(props) {
      super(props)
      
      this.state = {
        lattitude: "",
        longitude: ""
      }
    }

  componentWillMount() {
    /// getting user geolocation 
  const geoLocation = () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
      });

   
  
    }


  }


  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <Header/>
        </header>
        <main className="container">
          <div className="row">
      
         <Redirect from="/" to="/landingPage"/>
         <Route path="/mainPage" component={MainPage}/>
         <Route path="/landingPage" component={LandingPage}/>
         <Route path="/detailsPage" component={DetailsPage}/>
          </div>
        </main>
        </React.Fragment>
    );
  }
}

export default App;



  

 
