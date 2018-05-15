import React, { Component } from "react";
import { Link } from "react-router-dom";    

import Header from "../partials/header";
import "./landing-page.css/landing-page.css"

class LandingPage extends React.Component {
    constructor() {
        super();

        ///neki state
    }


        // funkcije

        
    render() {

        return (   
        <div className="landing col-12 col-sm-10 offset-sm-1 col-md-6 offset-md-3">
            <p>We need to use your geolocation in order to locate planes near you</p>
            <div className="buttons row justify-content-around">
                <Link to="/mainPage"><button className="buttons col-4 btn btn-success">I`m ok with that</button></Link> 
                <button className="buttons col-4 btn btn-danger">I`m not ok with that</button>
            </div>
        </div>
    )}
}

export default LandingPage;