import { useState } from "react"

// COMPONENTS
import MyMap from "./MyMap"


export default function GoogleMaps() {
    const [showInMaps, setShowInMaps] = useState("showInMapsDefault")

    return(
        <div className="mapsContainer">

            <MyMap 
            showInMaps={showInMaps}
            setShowInMaps={setShowInMaps}
            />  
            
            <div 
            className={"showInMapsButton " + showInMaps}>
                <a
                href="https://www.google.com/maps/place/Autoservis+-+Laube/@50.542213,14.929176,17z/data=!4m6!3m5!1s0x470951f9bf2e6521:0x1aa775c8cccf01a5!8m2!3d50.5421099!4d14.9291768!16s%2Fg%2F11vrdwrgxt?hl=en&entry=ttu" 
                target="_blank" 
                rel="noreferrer"
                >
                    <p>Otevřít v Google Maps</p>
                </a>
            </div>

        </div>
    )
}