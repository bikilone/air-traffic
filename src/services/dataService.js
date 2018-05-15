

const url = "http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json";


class DataService {
    
    geoLocation = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log(position.coords.latitude, position.coords.longitude);
          this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
          })
        });
    
      }
    
}