const error = "n/a"

class AirplaneData {
    constructor(data) {
        this.flightId = data.Call;
        this.altitude = data.Alt || error;
        this.type = data.Type || error;
        this.manufactor = data.Man || error;
        this.departure = data.From || error;
        this.arrival = data.To || error;
        this.direction = data.Trak || error;
        this.logo = data.Op? data.Op.split(' ').join('').concat('.com').toLowerCase() : error;
        this.direction = data.Trak || 0;
    }
}

export default AirplaneData;