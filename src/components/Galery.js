//img galery lib
import ImageGallery from "react-image-gallery";

// custom img galery style
import "./image-gallery.css"

//pic
import car1 from "../pictures/galery/1.webp";
import car2 from "../pictures/galery/2.webp";
import car3 from "../pictures/galery/3.webp";
import car4 from "../pictures/galery/4.webp";
import car5 from "../pictures/galery/5.webp";
import car6 from "../pictures/galery/6.webp";
import car7 from "../pictures/galery/7.webp";
import car8 from "../pictures/galery/8.webp";
import car9 from "../pictures/galery/9.webp";


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
            original: car3,
            originalAlt: "opravy",
            originalWidth: "1000"
          },
          {
            original: car4,
            originalAlt: "opravy",
            originalWidth: "1000"
          },
          {
            original: car5,
            originalAlt: "opravy",
            originalWidth: "1000"
          },
          {
            original: car6,
            originalAlt: "opravy",
            originalWidth: "1000"
          },
          {
            original: car7,
            originalAlt: "opravy",
            originalWidth: "1000"
          },
          {
            original: car8,
            originalAlt: "opravy",
            originalWidth: "1000"
          },
          {
            original: car9,
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
                        <div className="fcl pad2 borderB1 gap1">
                            <p 
                            className="title darkT"
                            onClick={() => galery.current.scrollIntoView()} 

                            >Galerie</p>
                            <h1 className="">Poznejte mojí práci v akci.</h1>
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