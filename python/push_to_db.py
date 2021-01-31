import boto3
import arrow as arrow
from time import sleep

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('FridgeReading-guv5sdhgkffxxowqjfc25onfba-staging')

# When set to true, a new record will be inserted into the database for each reading.
# Setting to false will use the same record.
overwrite_record = True

while True:
    datetime_formatted = arrow.utcnow().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")

    table.put_item(
        Item={
            'id': '1' if overwrite_record else datetime_formatted,
            'temperature': '1.1',
            'humidity': '101.23',
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
