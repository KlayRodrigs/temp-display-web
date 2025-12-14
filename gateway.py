import serial
import paho.mqtt.client as mqtt
import time
import json

PORT_SERIAL = '/dev/ttyUSB0'
SPEED = 9600

BROKER = "broker.hivemq.com"
PORT_MQTT = 1883
TOPIC = "class/test/temperature"

arduino = serial.Serial(PORT_SERIAL, SPEED, timeout=1)
time.sleep(2)

client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
client.connect(BROKER, PORT_MQTT, 60)

while True:
    if arduino.in_waiting > 0:
        line = arduino.readline().decode('utf-8').strip()
        
        if line.startswith("{") and line.endswith("}"):
            data = json.loads(line)
            data_format = {
                "temperature": f"{data['t']}°C",
                "humidity": f"{data['h']}%"
            }
            payload = json.dumps(data_format)
            client.publish(TOPIC, payload)