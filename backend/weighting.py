import pandas as panda
import folium
import geopandas as gpd

#firstschools = panda.read_csv(r"C:\Users\Giosvelte\Documents\GitHub\hungryguys\backend\A-Istates.csv", encoding='ISO-8859-1')
#secschools = panda.read_csv(r"C:\Users\Giosvelte\Documents\GitHub\hungryguys\backend\K-N.csv", encoding='ISO-8859-1')
#thirdschools = panda.read_csv(r"C:\Users\Giosvelte\Documents\GitHub\hungryguys\backend\something-Z.csv", encoding='ISO-8859-1')

#all_schools = panda.concat([firstschools, secschools, thirdschools], ignore_index=True)

#schools_coordinates = all_schools[['LONCOD', 'LATCOD']]

#schools_coordinates.to_csv(r'C:\Users\Giosvelte\Documents\GitHub\hungryguys\backend\allschools_coordinates.csv', index=False)

#print (firstlist[0])
#print (firstschools.head())
#gdf = gpd.read_file(r"C:\Users\Giosvelte\Documents\GitHub\hungryguys\backend\export.geojson")
#gdf = gdf['geometry']
#gdf.to_csv('parks.csv', index=False)
#print (gdf.head())

#made by chatgpt
#gdf = gpd.read_file(r"C:\Users\Giosvelte\Documents\GitHub\hungryguys\backend\export.geojson")
# Extract the longitude and latitude from the 'geometry' column
#gdf['longitude'] = gdf['geometry'].apply(lambda x: x.x)
#gdf['latitude'] = gdf['geometry'].apply(lambda x: x.y)
# Create a new DataFrame with just the longitude and latitude
#coordinates_df = gdf[['longitude', 'latitude']]
# Save the extracted coordinates to a CSV file
#coordinates_df.to_csv('parks_coordinates.csv', index=False)
# Print the first few rows to check
#print(coordinates_df.head())


