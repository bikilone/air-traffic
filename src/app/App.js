import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import '../App.css';

import Header from "./partials/header";
import LandingPage from "./landing_page/landingPage";
import MainPage from "./main_page/mainPage"
import DetailsPage from "./details_page/detailsPage"
import { dataService } from "../services/dataService";


class App extends Component {
  constructor(props) {
    super(props) 
    this.state={
      latitude: "",
      longitude: ""
    }
  }
  geoLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        var latitude = position.coords.latitude,
              longitude = position.coords.longitude
              this.setState({
                  latitude: latitude,
                  longitude: longitude
              })
              console.log(this.state);
              console.log(dataService.fetching(this.state.latitude, this.state.longitude))
              
              
              
            });
            
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
         <Route path="/mainPage" render={()=><MainPage position={this.state}/>} />
         <Route path="/landingPage" render={()=><LandingPage geolocation={this.geoLocation}/>}/>
         <Route path="/detailsPage" component={DetailsPage}/>
          </div>
        </main>
        </React.Fragment>
    );
  }
}

export default App;



  

 
