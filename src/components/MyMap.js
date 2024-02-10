import { useEffect } from "react"

export default function MyMap() {

    useEffect(() => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 50.542213439941406, lng: 14.929176330566406 },
            zoom: 16
        });
    }, []);

    return (
    <div id="map" className="map">

    </div>


    );

}