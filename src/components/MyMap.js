
// LIBRARIES
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState } from 'react';

// COMPONENTS
import { apiKeys } from '../config/apiKeys';

export default function MyMap({ showInMaps, setShowInMaps }) {

    // STATES
    const [zoom, setZoom] = useState(12);

    // MAP INPUTS
    const containerStyle = {
        width: '100%',
        height: '350px'
    };
    
    const center = {
      lat: 50.542213439941406,
      lng: 14.929176330566406
    };

    // LOADING GOOGLE MAP
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKeys.google
    })

    return isLoaded ? (

        <GoogleMap
        center={center}
        zoom={zoom}
        mapContainerStyle={containerStyle}
        onMouseDown={() => {        
            if(showInMaps === "showInMapsShow") {
                setShowInMaps("showInMapsHide")
            }
        }}

        options={{
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        }}
    >
        <Marker position={center} onClick={() => {
            setShowInMaps("showInMapsShow")
            setZoom(16);
            }}/>

    </GoogleMap>
    ) : <></>
}
