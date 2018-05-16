import React, { Component } from "react";

import "./error-page-css/error-page.css"

export default class ErrorPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (

            <div className="error">
                <p>You didn`t allow geolocation</p>
            </div>
        )
    }
}