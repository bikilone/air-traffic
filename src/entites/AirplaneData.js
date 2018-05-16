class AirplaneData {
    constructor(data) {
        this.flightId = data.Id;
        this.altitude = data.Alt;
        this.type = data.Type;
        this.manufactor = data.Man;
        this.departure = data.From;
        this.arrival = data.To;
        this.direction = data.Trak;
    }
}

export default AirplaneData;