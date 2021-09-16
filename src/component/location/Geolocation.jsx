import React, { useState } from "react";

const Geolocation = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [status, setStatus] = useState('');

    const getCurrentLocation = () => {
        if(!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus("Locating...");
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus('');
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            }, ()=> {
                setStatus('Unable to retrieve your location');
            });
        };
    };

    return (
        <div className="Geolocation">
            <button onClick={getCurrentLocation}>Use Current Location</button>
            <h1>Coordinates</h1>
            <p>{status}</p>
            {latitude && <p>Latitude: {latitude}</p>}
            {longitude && <p>Latitude: {longitude}</p>}
        </div>
    );

};


export default Geolocation;
