import { useEffect, useState } from "react";

// COMPONENTS
import GoogleMaps from "./GoogleMaps";

export default function Kontakt({ kontakt, mainOpacity }) {

    const [animClass1, setAnimClass1] = useState("");

    const email = "autoservislaube@seznam.cz";

    function scrollFun() {
        // check for screen size
        const screenHeight = window.innerHeight;
        const thisDiv = document.getElementById("kontaktText");

        // animate on small screen only
        let thisClass;
        
        if(thisDiv && mainOpacity === 1) {                                        
            const thisY = thisDiv.getBoundingClientRect().y

            if(thisY < screenHeight - 100){
                // show
                thisClass = "kontaktAnimShow"
            } else {
                // hide
                thisClass = "kontaktAnimHidden"
            }

            setAnimClass1(thisClass);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollFun);

        return() => {
            window.removeEventListener("scroll", scrollFun);
        }
    })

    useEffect(() => {
        scrollFun()
        // eslint-disable-next-line
    }, [])

    return(
        <>
            <div 
            ref={kontakt}
            className="scrollMarginTop fullW">
                <div className="page2 fc">
                    <div className="container fc gap1">
                        <div className="fcl pad2 borderB2 gap1">
                            <p 
                            className={"title2 whiteT"}
                            onClick={() => kontakt.current.scrollIntoView()}
                            >Kontakt</p>
                            <div>
                                <h1>Máte nějaký problém nebo potřebujete poradit?</h1>
                            </div>
                        </div>

                        <div 
                        className="serviceCard" 
                        style={{width: "100%"}}
                        >
                
                            <div 
                            className={"fcl " + animClass1} 
                            id="kontaktText" 
                            >

                                <div>
                                    <p style={{fontSize: "17px", fontWeight: "bold"}}>Pracovní doba:</p>

                                        <div className="fr gap2">
                                            <p>Po-Čt <strong style={{fontWeight: "600"}}>8-16</strong></p>
                                            <p>Pá <strong style={{fontWeight: "600"}}>8-14</strong></p>
                                        </div>
                                </div>

                                <div>
                                    <p style={{fontSize: "17px", fontWeight: "bold"}}>Adresa:</p>
                                    <address>
                                        <p>Horní Bukovina 52, 295 01</p>
                                    </address>
                                </div>

                                <a className="phoneLink" href="tel:+420739821125">
                                    <div >
                                        <p style={{fontSize: "17px", fontWeight: "bold"}}>Telefon:</p>
                                        <p className="phone">+420 739 821 125</p>
                                    </div>
                                </a>

                                <a className="phoneLink" href={"mailto:" + email}>
                                    <div>
                                        <p style={{fontSize: "17px", fontWeight: "bold"}}>Email:</p>
                                        <p className="phone">{email}</p>
                                    </div>
                                </a>

                                <div>
                                    <p style={{fontSize: "17px", fontWeight: "bold"}}>IČO:</p>
                                    <p>17144965</p>
                                </div>
                            </div>
                        

                            <GoogleMaps />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}