import React, { useEffect, useRef, useState } from "react";

//LOTTIE LIB
import Lottie from "lottie-react";
import carAnim from "../animations/car.json";


export default function Header({ header, introAnimClass, mainOpacity }) {
  
    //title ref
    const titleRef = useRef();
    const carRef = useRef();

    const [coverHeight, setCoverHeight] = useState(null);
    const [coverOffset, setCoverOffset] = useState(null);

    //UDJUST COVER INTRO COVER BANER WHEN RESIZE
    function resizeFun() {
        setCoverHeight(titleRef.current?.offsetHeight)
        setCoverOffset(carRef.current?.offsetHeight / 2.1)
    }
    
    useEffect(() => {
        window.addEventListener("resize", resizeFun);

        return () => {
            window.removeEventListener("resize", resizeFun);
        }
    })

    useEffect(() => {
        resizeFun();
    }, [])
    


    return(
        <>
        <div 
        ref={header}
        style={{
            width: "100%",
            paddingTop: "60px",
            opacity: mainOpacity,
            transition: "1s",
        }}>
            <header>
            <img 
                className="introHeight"
                src="tools.webp"
                alt="background" 
                style={{
                    width: "100%",
                    objectFit: "cover"
                }}
                />
                
                <div 
                className="introHeight"
                style={{
                    position: "absolute",
                    top: "60px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems:"center",
                    justifyContent: "center"
                }}>
                    <div 
                    ref={titleRef}
                    className={introAnimClass[2]}
                    >
                        <div
                        style={{
                            width: "90%",
                            maxWidth: "500px"
                        }}>
                            <svg 
                            width="100%" 
                            viewBox="0 0 430 50"
                            >
                            <text 
                            className="textPathDefault"
                            x="11" 
                            y="41"
                            >Autoservis Laube</text>
                            </svg>

                            <div 
                            className={introAnimClass[1]}>
                            </div>
                        </div>

                        <div 
                        style={{
                            width: "100%",
                            position: "absolute",
                            left: "0px",
                            overflow: "auto",
                            overflowX: "hidden",
                        }}>

                            <div 
                            className={introAnimClass[0]}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                width: "100%"
                            }}
                            >
                                <div
                                ref={carRef}
                                >
                                <Lottie 
                                    className="carAnimationDefault"
                                    animationData={carAnim}
                                />
                                </div>

                                <div
                                style={{
                                    height: (coverHeight - 5) + "px",
                                    width: "5000px",
                                    background: "rgba(40, 44, 52, 1)",
                                    marginLeft: coverOffset + "px",
                                    position: "absolute",
                                    zIndex: "1"
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>


        </>
    )
}