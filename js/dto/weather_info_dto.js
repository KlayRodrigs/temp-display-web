class WeatherInfoDTO {
    constructor({ temperature, humidity }) {
        this.temperature = temperature;
        this.humidity = humidity;
    }

    static fromJSON(json) {
        return new WeatherInfoDTO({
            temperature: json.temperature,
            humidity: json.humidity
        });
    }

    toJSON() {
        return {
            temperature: this.temperature,
            humidity: this.humidity
        };
    }

    static fixture() {
        return new WeatherInfoDTO({
            temperature: '18°C',
            humidity: '60%'
        });
    }
}

export default WeatherInfoDTO;
