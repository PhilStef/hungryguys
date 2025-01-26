import pandas as pd
import json

# Read the CSV file
df = pd.read_csv('backend/csvfiles/parks_coordinates.csv')

# Extract latitude and longitude columns as a list of tuples
coords = df[['latitude', 'longitude']].values.tolist()

# Convert the list to a JSON format
coords_json = json.dumps(coords)

# Print the result (or save to a file if you prefer)
print(coords_json)

# Optionally, save to a file to be used in JavaScript
with open('coordinates.json', 'w') as json_file:
    json.dump(coords, json_file)