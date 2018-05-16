import axios from "axios";
import React from "react";
import $ from "jquery";
import AirplaneData from "../entites/AirplaneData"

const url = "http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json";


class DataService {
    
    /// fetching all data
    /// using regular function for binding later

     fetching(lat, lng) {
        const array = [];
        const data = [];
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
         
            array.forEach(element => {
                const obj = {
                    direction: <i class="fas fa-plane"></i>,
                    height: element.altitude,
                    flightCode: element.flightId
                }
                data.push(obj);
            });  
            
            this.setState({
                data: data
            })
            
            
            
        }
        )   
    
    }
    
}

export const dataService = new DataService;