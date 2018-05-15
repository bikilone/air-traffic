import React, { Component } from "react";

import "./details-page-css/details-page.css"

export default class DetailsPage extends React.Component {
    constructor() {
        super() 

    }

    render() {
        return (
            <div id="card" class="card col-8 offset-2 offest-2 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4" style={{width: 18 + "rem"}}>
  <img class="card-img-top" src="https://logo.clearbit.com/britishairways.com?s=128" alt="Card image cap"/>
  <div class="card-body">
  <table class="table table-dark col-12">
  <thead>
    <tr>
      <th scope="col">Departure</th>
      <th scope="col">Arrival</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BGD </td>
      <td>LND</td>
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
      <td>Boing</td>
      <td>737</td>
    </tr>

  </tbody>
</table>
    <a id="go-back" href="#/mainPage" class="btn col-4 offset-4  offset-sm-4 btn-primary">Go back</a>
  </div>
</div>
        )
    }
}