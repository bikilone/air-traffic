class AirplaneData {
    constructor(data) {
        this.flightId = data.Call;
        this.altitude = data.Alt;
        this.type = data.Type;
        this.manufactor = data.Man;
        this.departure = data.From;
        this.arrival = data.To;
        this.direction = data.Trak;
        this.logo = data.Op.split(' ').join('').concat('.com').toLowerCase();
    }
}

export default AirplaneData;