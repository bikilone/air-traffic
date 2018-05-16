import axios from "axios";
import $ from "jquery";
import AirplaneData from "../entites/AirplaneData"

const url = "http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json";


class DataService {
    
    /// fetching all data

    fetching = (lat, lng) => {
        const array = [];
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
            return array 
        }
        )   
    
    }
    
}

export const dataService = new DataService;