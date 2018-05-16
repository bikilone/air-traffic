import axios from "axios";
import React from "react";
import $ from "jquery";
import AirplaneData from "../entites/AirplaneData";
import { Link } from "react-router-dom";

const url = "http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json";


class DataService {
    
    /// fetching all data
    /// using regular function for binding later

     fetching(lat, lng) {
        const array = [];
        const data = [];

        /// using ajax and jsonp because of CORS policy
        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: url,
            data: "lat="+ lat + "&" + "lng=" + lng + "&fDstL=0&fDstU=100"
        })
        .done((response) => { 
             
            response.acList.forEach(element => {
               array.push(new AirplaneData(element)); 
            });
            
            this.setState({
                data: array
            })  
        }
        ) 
        .fail((response)=> {
             /// showing error message
             $(".animation").animate({
                marginRight: "100px"
            }, 1000).delay(1000).animate({
                marginRight: "-150px"
            })
       
        })  
    
    }
    
}

export const dataService = new DataService;