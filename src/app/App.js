import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
import '../App.css';

import Header from "./partials/header";
import LandingPage from "./landing_page/landingPage";
import MainPage from "./main_page/mainPage"
import DetailsPage from "./details_page/detailsPage"
import { dataService } from "../services/dataService";
import ErrorPage from "./error_page/errorPage"


class App extends Component {
  constructor(props) {
    super(props) 
    this.state={
      latitude: "",
      longitude: "",
      data: []
    }
  }

  componentDidMount() {


    if (!window.navigator) {
      window.location.replace("../#/error");
    }
  }

  geoLocation = () => {
    
    navigator.geolocation.watchPosition((position) => {

      /// on success redirect to main page
      window.location.replace("../#/mainPage/")
      // getting lat and long
      var latitude = position.coords.latitude,
      longitude = position.coords.longitude
      this.setState({
        latitude: latitude,
        longitude: longitude
      })
      localStorage.setItem("lat", "positon.coords.latitude");
      localStorage.setItem("lon", "positon.coords.longitude");
           const fetching = dataService.fetching.bind(this, latitude, longitude);

           /// fetching first time
           fetching();

           // and fetching on every minute
            setInterval(fetching, 60000);
              
              
            },

            /// handling user denial to share position
            (error) => {
              window.location.replace("../#/error/")
             
            })
                   
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
         <Route path="/mainPage" render={()=><MainPage lat={this.state.latitude} lon={this.state.longitude} data={this.state.data}/>} />
         <Route path="/landingPage" render={()=><LandingPage geolocation={this.geoLocation}/>}/> 
         <Route exact path="/detailsPage/:id" render={(props)=><DetailsPage {...props} data={this.state.data}/>}/> 
         <Route path="/error" component={ErrorPage}/>
          

          </div>
        </main>
        </React.Fragment>
    );
  }
}

export default App;



  

 
