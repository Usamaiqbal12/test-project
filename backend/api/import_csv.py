import csv
from datetime import datetime
from api.models import Sales_Data  

def import_sales_data_from_csv(file_path):
    with open(file_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            sales_data = Sales_Data(
                date=datetime.strptime(row['Date'], '%m/%d/%Y').date(),
                order_id=row['OrderId'],
                sku=row['SKU'],
                type=row['Type'],
                region=row['Region'],
                channel=row['Channel'],
                fulfillment_channel=row['FulfillmentChannel'],
                quantity=int(row['Quantity'])
            )
            sales_data.save()

    print("Data import complete!")
