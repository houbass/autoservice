import { useEffect, useRef, useState } from "react"

import Lottie from "lottie-react";
import geers from "../animations/geers.json"

export default function Navbar({ header, main, kontakt, galery, about }) {

    const geersRef = useRef();
    const [selections, setSelections] = useState(["0%", "0%", "0%", "0%"]);
    const [goUpVisibility, setGoUpVisibility] = useState("goUpHidden")
    const [firstTImeHandler, setFirstTimeHandler] = useState(true);

    //go up button visibility
    function goUpVisibilityFun() {
        if(window.scrollY > 100) {
            setGoUpVisibility("goUpShow");
            setFirstTimeHandler(false);
        } else if(window.scrollY < 100 && firstTImeHandler === false) {
            setGoUpVisibility("goUpHide");
        }
    }

    //scrolling function
    function scrolling() {
        const screen = window.innerHeight / 2;

        if(
        main.current.getBoundingClientRect().y < screen && 
        kontakt.current.getBoundingClientRect().y > screen
        ) {
            setSelections(["100%", "0%", "0%", "0%"]);
        } else if(
        kontakt.current.getBoundingClientRect().y < screen && 
        galery.current.getBoundingClientRect().y > screen
        ) {
            setSelections(["0%", "100%", "0%", "0%"]);
        } else if(
            galery.current.getBoundingClientRect().y < screen &&
            about.current.getBoundingClientRect().y > screen
        ) {
            setSelections(["0%", "0%", "100%", "0%"]);
        } else if(
            about.current.getBoundingClientRect().y < screen
        ) {
            setSelections(["0%", "0%", "0%", "100%"]);
        }else{
            setSelections(["0%", "0%", "0%", "0%"]);
        }

        goUpVisibilityFun()

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
        window.addEventListener("scroll", scrolling, { passive: true });

        return () => {
            window.removeEventListener("scroll", scrolling, { passive: true });
        }
    });

    useEffect(() => {
        geersRef.current.stop();
        scrolling();
    }, []);
    
    return(
        <>
        <div 
        style={{
            position: "fixed",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(0,0,0,1)",
            width: "100%",
            height: "60px",
            zIndex: "1",
        }}>

            <Lottie 
            onClick={() => {
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

                <div>
                    <button 
                    className="navBtn" 
                    onClick={() => {
                        about.current.scrollIntoView();
                    }}
                    >o mně</button>
                    <div
                    style={{
                        background: "white",
                        width: selections[3],
                        height: "3px",
                        marginTop: "-3px",
                        transition: "1s",
                        opacity: selections[3][0]
                    }}>
                    </div>
                </div>

            </div>
        </div>
        <div 
        onClick={() => {
            header.current.scrollIntoView();
        }} 
        className={goUpVisibility}
        style={{
            position: "fixed",
            zIndex: "10",
            right: "10px",
            background: "black",
            width:"30px",
            height: "30px",
            padding: "20px",
            borderRadius: "50%", 
            cursor: "pointer"
        }}>
            <svg 
            viewBox="0 0 551.13 551.13" 
            xmlns="http://www.w3.org/2000/svg" 
            id="svg-1d98"
            fill="orange" 
            >
                <g stroke="orange">
                <path strokeWidth="40" d="m275.565 189.451 223.897 223.897h51.668l-275.565-275.565-275.565 275.565h51.668z"></path>
                </g>
            </svg>
        </div>
        </>
    )
}