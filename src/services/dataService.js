

const url = "http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json";


class DataService {
    
    /// fetching all data

    fetching = (lat, lng) => {
        
    //     fetch(url + "?" + "lat="+ lat + "&" + "lng=" + lng + "&fDstL=0&fDstU=100", {
    //         "Access-Control-Allow-Origin": "http://localhost:3000"
    //     }
    // )
    //     .then((response) => console.log(response)
    //     )
    }
    
}

export const dataService = new DataService;