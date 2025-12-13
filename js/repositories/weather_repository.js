import WeatherInfoDTO from '../dto/weather_info_dto.js';
import { connect, MqttClient } from 'mqtt';

class WeatherRepository {
    constructor() {
        this.client = null;
        this.callbacks = new Set();
        this.currentData = WeatherInfoDTO.fixture();
    }

    async connect() {
        if (this.client) return;

        const options = {
            clientId: 'web-client-' + Math.random().toString(16).substr(2, 8),
            clean: true,
            connectTimeout: 4000,
            reconnectPeriod: 1000,
        };

        this.client = connect('wss://broker.hivemq.com:8884/mqtt', options);

        this.client.on('connect', () => {
            console.log('Connected to MQTT broker');
            this.client.subscribe('weather/data', (err) => {
                if (!err) {
                    console.log('Subscribed to weather/data topic');
                }
            });
        });

        this.client.on('message', (topic, message) => {
            if (topic === 'weather/data') {
                try {
                    const data = JSON.parse(message.toString());
                    this.currentData = WeatherInfoDTO.fromJSON(data);
                    this.notifySubscribers();
                } catch (error) {
                    console.error('Error parsing MQTT message:', error);
                }
            }
        });

        this.client.on('error', (error) => {
            console.error('MQTT Error:', error);
        });
    }

    subscribe(callback) {
        this.callbacks.add(callback);
        callback(this.currentData);
        return () => this.callbacks.delete(callback);
    }

    notifySubscribers() {
        for (const callback of this.callbacks) {
            callback(this.currentData);
        }
    }

    async getCurrentWeather() {
        return this.currentData;
    }
    disconnect() {
        if (this.client) {
            this.client.end();
            this.client = null;
        }
    }
}

export default new WeatherRepository();
