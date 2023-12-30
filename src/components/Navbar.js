import { useEffect, useRef, useState } from "react"

import Lottie from "lottie-react";
import geers from "../animations/geers.json"
import geers2 from "../animations/geers2.json"

export default function Navbar({ header, main, kontakt, galery }) {

    const [selections, setSelections] = useState(["0%", "0%", "0%"]);
    const geersRef = useRef();

    const interactivity = {
        mode: "scroll",
        actions: [
          {
            visibility: [1, 1],
            type: "seek",
            frames: [0, 20],
          },

        ],
      };

    function scrolling() {
        console.log("SLUŽBY Y: " + main.current.getBoundingClientRect().y)
        console.log("KONTAKT Y: " + kontakt.current.getBoundingClientRect().y)
        console.log("WINDOW Y: " + window.scrollY)

        geersRef.current.play();
        const timeout = setTimeout(() => {
            geersRef.current.pause();
        }, 5)

        return () => {
            clearTimeout(timeout)
        }

    }

    

    useEffect(() => {
        geersRef.current.stop();
        scrolling();
        window.addEventListener("scroll", scrolling);

        return () => {
            window.removeEventListener("scroll", scrolling);
        }
    }, [])
    
    return(
        <>
        <div 
        style={{
            position: "fixed",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(0,0,0,0.8)",
            width: "100%",
            height: "60px",
            zIndex: "1",
        }}>

            <svg 
            onClick={() => {
                setSelections(["0%", "0%", "0%"]);
                header.current.scrollIntoView();
            }}
            style={{
                cursor: "pointer",
                paddingLeft: "20px",
                opacity: "1"
            }}
            height="32"
            width="32"
            fill="white"
            >
                <path
                    d="M 19.9375 0.24804688 C 19.740589 0.27223745 19.527888 0.35950276 19.296875 0.52734375 C 17.448768 1.8700717 20.901227 3.5910923 20.195312 5.7636719 C 19.489398 7.9362514 15.684711 7.3000767 16.390625 9.4726562 C 17.096539 11.645236 19.800331 8.8936 21.648438 10.236328 C 23.496544 11.579056 21.715615 15 24 15 C 26.284385 15 24.503456 11.579056 26.351562 10.236328 C 28.199669 8.8936 30.903461 11.645236 31.609375 9.4726562 C 32.315289 7.3000766 28.510601 7.9362516 27.804688 5.7636719 C 27.098774 3.5910923 30.551231 1.8700718 28.703125 0.52734375 C 26.855018 -0.81538437 26.284385 3 24 3 C 22.001163 3 21.31588 0.078712883 19.9375 0.24804688 z M 24 5 A 2 2 0 0 1 26 7 A 2 2 0 0 1 24 9 A 2 2 0 0 1 22 7 A 2 2 0 0 1 24 5 z " />
                <path
                    d="M 12 8 C 9.6207696 8 11.137575 11.698883 8.9394531 12.609375 C 6.7413307 13.519867 5.1979951 9.8332551 3.515625 11.515625 C 1.833255 13.197995 5.5198671 14.741331 4.609375 16.939453 C 3.6988828 19.137575 0 17.62077 0 20 C 0 22.37923 3.698883 20.862425 4.609375 23.060547 C 5.519867 25.258669 1.8332551 26.802005 3.515625 28.484375 C 5.1979949 30.166745 6.7413309 26.480133 8.9394531 27.390625 C 11.137575 28.301117 9.6207695 32 12 32 C 14.37923 32 12.862425 28.301117 15.060547 27.390625 C 17.258669 26.480133 18.802005 30.166745 20.484375 28.484375 C 22.166745 26.802005 18.480133 25.258669 19.390625 23.060547 C 20.301117 20.862425 24 22.37923 24 20 C 24 17.62077 20.301117 19.137575 19.390625 16.939453 C 18.480133 14.741331 22.166745 13.197995 20.484375 11.515625 C 18.802005 9.833255 17.258669 13.519867 15.060547 12.609375 C 12.862425 11.698883 14.37923 8 12 8 z M 12 17.5 A 2.5 2.5 0 0 1 14.5 20 A 2.5 2.5 0 0 1 12 22.5 A 2.5 2.5 0 0 1 9.5 20 A 2.5 2.5 0 0 1 12 17.5 z " />
            </svg>

            <Lottie 
            lottieRef={geersRef}
            animationData={geers}
            loop={true}
            />



            <div 
            style={{
                paddingRight: "20px",
                display: "flex",
                flexDirection: "row",
                gap: "20px"
            }}>
                <div>
                    <button 
                    className="navBtn"
                    onClick={() => {
                        //geersRef.current.playSegments(2);
                        setSelections(["100%", "0%", "0%"]);
                        main.current.scrollIntoView();
                    }}
                    >služby</button>
                    <div
                    style={{
                        background: "white",
                        width: selections[0],
                        height: "3px",
                        marginTop: "-3px",
                        transition: "1s",
                        opacity: selections[0][0]
                    }}>
                    </div>
                </div>

                <div>
                    <button 
                    className="navBtn"
                    onClick={() => {
                        setSelections(["0%", "100%", "0%"]);
                        kontakt.current.scrollIntoView();
                    }}
                    >kontakt</button>
                    <div
                    style={{
                        background: "white",
                        width: selections[1],
                        height: "3px",
                        marginTop: "-3px",
                        transition: "1s",
                        opacity: selections[1][0]
                    }}>
                    </div>
                </div>

                <div>
                    <button 
                    className="navBtn" 
                    onClick={() => {
                        setSelections(["0%", "0%", "100%"]);
                        galery.current.scrollIntoView();
                    }}
                    >galerie</button>
                    <div
                    style={{
                        background: "white",
                        width: selections[2],
                        height: "3px",
                        marginTop: "-3px",
                        transition: "1s",
                        opacity: selections[2][0]
                    }}>
                    </div>
                </div>

            </div>



        </div>

        <div 
        style={{
            position: "fixed",
            bottom: "10px",
            zIndex: "10",
            right: "10px"
        }}>
            <button
            onClick={() => {
                setSelections(["0%", "0%", "0%"]);
                header.current.scrollIntoView();
            }}
            style={{
                padding: "15px",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                opacity: 1
            }}>˄</button>
        </div>
        </>
    )
}