import boto3
import arrow as arrow
from time import sleep
import Adafruit_DHT

DHT_SENSOR = Adafruit_DHT.DHT22
DHT_PIN = 4

dynamodb = boto3.resource('dynamodb',
                          region_name='us-east-1',
                          aws_access_key_id='',
                          aws_secret_access_key=''
                          )
table = dynamodb.Table('FridgeReading-guv5sdhgkffxxowqjfc25onfba-staging')

# When set to true, a new record will be inserted into the database for each reading.
# Setting to false will use the same record.
overwrite_record = True

while True:
    humidity, temperature = Adafruit_DHT.read_retry(DHT_SENSOR, DHT_PIN)

    if humidity is not None and temperature is not None:
        print("Temp={0:0.1f}*C  Humidity={1:0.1f}%".format(temperature, humidity))
    else:
        print("Failed to retrieve data from humidity sensor")

    datetime_formatted = arrow.utcnow().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")

    table.put_item(
        Item={
            'id': '1' if overwrite_record else datetime_formatted,
            'temperature': str(round(temperature, 2)),
            'humidity': str(round(humidity, 2)),
            'datetime': datetime_formatted,
            'createdAt': datetime_formatted,
            'updatedAt': datetime_formatted,
            '_version': '2',
            '_lastChangedAt': 1,
            '__typename': 'FridgeReading',
            'type': 'FridgeReading'
        }
    )
    sleep(3)

