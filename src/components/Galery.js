//img galery lib
import ImageGallery from "react-image-gallery";
//import "react-image-gallery/styles/css/image-gallery.css";


import "./image-gallery.css"

//pic
import car1 from "../pictures/galery/car1.png";
import car2 from "../pictures/galery/car2.png";

export default function Galery({ galery }) {

    //images
    const images = [
        {
            original: car1,
            originalAlt: "opravy",
            originalWidth: "1000"
          },
          {
            original: car2,
            originalAlt: "opravy",
            originalWidth: "1000"
          },
          {
            original: car1,
            originalAlt: "opravy",
            originalWidth: "1000"
          },
    ]


    return(
        <>
            <div 
            ref={galery}
            className="scrollMarginTop fullW">
                <div className="page1 fc">
                    <div className="container fc gap1">
                        <div className="fcl pad1 borderB1 gap1">
                            <p 
                            className="title darkT"
                            onClick={() => galery.current.scrollIntoView()} 

                            >Galerie</p>
                            <h1 className="pad2">Poznejte naši práci v akci.</h1>
                        </div>

                        <ImageGallery 
                        autoPlay={true} 
                        showNav={true} 
                        items={images} 
                        showThumbnails={false} 
                        showBullets={true} 
                        showFullscreenButton={false} 
                        />

                    </div>
                </div>
            </div>
        </>
    )
}