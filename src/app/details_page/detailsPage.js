import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./details-page-css/details-page.css"

export default class DetailsPage extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
          filteredData: [{
            departure: "",
            arrival: "",
            manufactor: "",
            type: "",
            logo: ""

          }]
        }
    }
    id = this.props.match.params.id;

    componentDidMount() {
      this.setState({
        filteredData: this.findId()
      })
     
      
    }
    findId = () => {
    const filter =  this.props.data.filter( (element) => {
        return (element.flightId == this.id)
      })
      return filter;
      
    }
    render() {
        return (
            <div id="card" class="card col-12  col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4" style={{width: 18 + "rem"}}>
  <img id="img-details" class="card-img-top" src={"https://logo.clearbit.com/"+this.state.filteredData[0].logo} onError={(e)=>{ this.onerror=null;
  e.target.src="https://www.vectorportal.com/img_novi/boeing-767-silhouette.jpg"}} alt={this.state.filteredData[0].logo}/>
  <div class="card-body">
  <table class="table table-dark col-12 font">
  <thead>
    <tr>
      <th scope="col">Departure</th>
      <th scope="col">Arrival</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{this.state.filteredData[0].departure || "n/a"}</td>
      <td>{this.state.filteredData[0].arrival || "n/a"}</td>
    </tr>

  </tbody>
</table>
<table class="table table-dark col-12">
  <thead>
    <tr>
      <th scope="col">Manufactor</th>
      <th scope="col">Model</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{this.state.filteredData[0].manufactor || "n/a"}</td>
      <td>{this.state.filteredData[0].type || "n/a"}</td>
    </tr>

  </tbody>
</table>
    <a id="go-back" href="#/mainPage" class="btn col-4 offset-4  offset-sm-4 btn-primary">Go back</a>
  </div>
</div>
        )
    }
}