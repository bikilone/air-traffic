import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom"
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
    this.state = {
      latitude: "",
      longitude: "",
      data: []
    }
  }

  componentDidMount() {
    if (!window.navigator) {
      this.props.history.push('/error');
    }

    if (localStorage.getItem('lat')) {
      const lat = parseFloat(localStorage.getItem('lat'))
      const lon = parseFloat(localStorage.getItem('lon'))
      
      this.fetchDataAndRedirect({ latitude: lat, longitude: lon })
    } else {
      this.props.history.push('/landingPage')
    }
  }

  fetchDataAndRedirect = (location) => {
    // on success redirect to main page
    this.props.history.push('/mainPage')

    // getting lat and long
    var latitude = location.latitude,
        longitude = location.longitude

    this.setState({
      latitude: latitude,
      longitude: longitude
    })

    const fetching = dataService.fetching.bind(this, latitude, longitude);

    // fetching first time
    fetching();

    // and fetching on every minute
    setInterval(fetching, 6000);
  }

  geoLocation = () => {
    const that = this

    navigator.geolocation.watchPosition((position) => {
      that.fetchDataAndRedirect({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })

      localStorage.setItem("lat", position.coords.latitude);
      localStorage.setItem("lon", position.coords.longitude);
    },
    /// handling user denial to share position
    (error) => {
      that.props.history.push('/error')
    })
  }

  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <Header />
        </header>
        <main className="container">
          <div className="row">
          
            <Route path="/mainPage" render={() => <MainPage lat={this.state.latitude} lon={this.state.longitude} data={this.state.data} />} />
            <Route exact path="/landingPage" render={(props) => <LandingPage geolocation={this.geoLocation} />} />
            <Route exact path="/detailsPage/:id" render={(props) => <DetailsPage {...props} data={this.state.data} />} />
            <Route path="/error" component={ErrorPage} />

          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(App);






