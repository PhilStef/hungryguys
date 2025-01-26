import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const LeafletMap = () => {
    // Create a position for the map center
    const position = [29.651634, -82.324829]; // Default position (latitude, longitude)
    const zoom = 15; // Zoom level

    // Custom icon (optional, if you want to use a custom marker icon)
    const customIcon = new L.Icon({
        iconUrl: "./marker.png",
        iconSize: [40, 40],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    // Custom component to handle map click and show popup
    const fetchDataFromFlask = async () => {
        try {
            // Send a GET request to Flask to fetch data
            const response = await axios.get('http://localhost:5000/submit');
            // Handle the response from Flask
            console.log('Data received from Flask:', response.data);
            setDataFromFlask(response.data.data); // Update the state with the received data
            setResponseMessage(response.data.message); // Update the message
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Use useEffect to set up polling (every 5 seconds)
    useEffect(() => {
        // Call the fetchData function every 5 seconds
        const interval = setInterval(fetchDataFromFlask, 5000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const MapEventListener = () => {
        const map = useMap(); // Access the map instance

        map.doubleClickZoom.disable();  // Disable double-click zoom
        map.zoomControl.remove();

        // useEffect(() => {
        //     const popup = L.popup(); // Create a new popup instance

        //     // Function to handle map click events
        //     const onMapClick = (e) => {
        //         popup
        //             .setLatLng(e.latlng)
        //             .setContent("You clicked the map at " + e.latlng.toString())
        //             .openOn(map); // Open popup on the map
        //     };

        //     // Add event listener for click
        //     map.on('click', onMapClick);

        //     // Cleanup event listener when component is unmounted
        //     return () => {
        //         map.off('click', onMapClick);
        //     };
        // }, [map]); // Dependency array ensures the effect runs only once

        useEffect(() => {
            const bounds = L.latLngBounds(
                [24.396308, -125.0],  // Southwest coordinates (latitude, longitude)
                [49.384358, -66.93457]   // Northeast coordinates (latitude, longitude)
            );

            map.setMaxZoom(10);

            // Apply maxBounds to the map
            map.setMaxBounds(bounds);
        }, [map]);

        return null; // This component doesn't need to render anything
    };

    return (
        <MapContainer
            center={position}
            zoom={zoom}
            style={{ height: '94vh', width: '100%' }} // 94% of the viewport height
        >
            <a href="https://www.flaticon.com/free-icons/marker" title="marker icons">Marker icons created by Freepik - Flaticon</a>

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
                {/* This Popup will open when clicking the marker */}
                <Popup>Your Marker</Popup>
            </Marker>

            {/* Event listener for map clicks */}
            <MapEventListener />
        </MapContainer>
    );
};

export default LeafletMap;
