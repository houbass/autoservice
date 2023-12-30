import { useEffect, useRef, useState } from "react"

import Lottie from "lottie-react";
import geers from "../animations/geers.json"
import geers2 from "../animations/geers2.json"

export default function Navbar({ header, main, kontakt, galery }) {

    const [selections, setSelections] = useState(["0%", "0%", "0%"]);
    const geersRef = useRef();



    function scrolling() {
        console.log("SLUŽBY Y: " + main.current.getBoundingClientRect().y)
        console.log("KONTAKT Y: " + kontakt.current.getBoundingClientRect().y)
        console.log("WINDOW Y: " + window.scrollY)
        console.log("WINDOW HEIGHT: " + (window.innerHeight / 2))

        const screen = window.innerHeight / 2;

        if(
        main.current.getBoundingClientRect().y < screen && 
        kontakt.current.getBoundingClientRect().y > screen
        ) {
            setSelections(["100%", "0%", "0%"]);
        } else if(
        kontakt.current.getBoundingClientRect().y < screen && 
        galery.current.getBoundingClientRect().y > screen
        ) {
            setSelections(["0%", "100%", "0%"]);
        } else if(
            galery.current.getBoundingClientRect().y < screen 
            //galery.current.getBoundingClientRect().y > screen
        ) {
            setSelections(["0%", "0%", "100%"]);
            }else{
            setSelections(["0%", "0%", "0%"]);
        }

        geersRef.current.play();
        const timeout = setTimeout(() => {
            geersRef.current.pause();
        }, 5)

        return () => {
            clearTimeout(timeout)
        }
    }

    

    //SCROLLING EVENT LISTENER
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

            <Lottie 
            onClick={() => {
                //setSelections(["0%", "0%", "0%"]);
                header.current.scrollIntoView();
            }} 
            style={{
                cursor: "pointer",
                paddingLeft: "20px",
            }}
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
                        //setSelections(["100%", "0%", "0%"]);
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
                        //setSelections(["0%", "100%", "0%"]);
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
                        //setSelections(["0%", "0%", "100%"]);
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
                //setSelections(["0%", "0%", "0%"]);
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