"use client"

import React, { useState, useRef, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Icon, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
// import L from 'leaflet';

// Define a custom marker icon
const customMarkerIcon = new L.Icon({
     iconUrl: "/images/icon/marker-icon.png",
     iconSize: [25, 41],
     iconAnchor: [12, 41],
     popupAnchor: [1, -34],
});
export default function Map() {


     const position = [8.980598056194573, 7.482322725899206]

     const driversPosition = [8.997045849923083, 7.475443279866642]

     const [myLocation, setMyLocation] = useState(position);
     const [driversLocation, setdriversLocation] = useState(driversPosition);
     const [distance, setDistance] = useState(null);
     const [mapBounds, setMapBounds] = useState(null);
     const [estimatedTime, setEstimatedTime] = useState(null);

     useEffect(() => {
          // Calculate the distance between myLocation and targetLocation
          const distanceInMeters = L.latLng(myLocation).distanceTo(L.latLng(driversLocation));

          const distanceInKilometers = (distanceInMeters / 1000).toFixed(2);
          setDistance(distanceInKilometers);

          console.log(distanceInKilometers);

          const averageSpeedKmPerHour = 55;
          const estimatedTimeHours = distanceInKilometers / averageSpeedKmPerHour;
          setEstimatedTime((estimatedTimeHours * 60).toFixed(2));

          const bounds = L.latLngBounds([myLocation, driversLocation]);
          setMapBounds(bounds.pad(0.1));

          // const bounds = [
          //      myLocation,
          //      driversLocation
          // ];
          // setMapBounds(bounds);
     }, [myLocation, driversLocation]);

     const myMarkerRef = useRef(null);
     const targetMarkerRef = useRef(null);

     useEffect(() => {
          if (myMarkerRef.current && targetMarkerRef.current) {
               myMarkerRef.current.openPopup();
               targetMarkerRef.current.openPopup();
          }
     }, []);


     return (
          <>

               <MapContainer className=' w-100 rounded-top-3 z-0' center={position} bounds={mapBounds} zoom={15} scrollWheelZoom={false} style={{ height: "70dvh" }}>
                    <TileLayer
                         attribution=' '
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={myLocation} icon={customMarkerIcon}>


                         {/* <Popup>
                         Your Location
                    </Popup> */}

                         <Popup autoClose={false} closeButton={false} autoPan={true} ref={myMarkerRef}>
                              <div className=' '>
                                   <h6>Your Driver is on his way to you</h6>

                                   <p className=' mb-1'>Distance: {distance} km</p>
                                   <span>Estimated Time: {estimatedTime} minutes</span>
                              </div>
                         </Popup>
                    </Marker>

                    <Marker position={driversLocation} icon={customMarkerIcon}>
                         <Popup autoClose={false}>Driver's Location</Popup>
                    </Marker>
                    {distance && (

                         <Polyline positions={[myLocation, driversLocation]} color="red">
                              <Popup>Distance: {distance} km</Popup>
                         </Polyline>
                    )}

               </MapContainer>
          </>
     )
}