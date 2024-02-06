import { useState } from "react";
import { useEffect } from "react";

// pic
import motulImg from "../pictures/motul.svg";
import certificateImg from "../pictures/certificate.svg";

export default function Sluzby({main, kontakt, DiagnosticPic, KlimaPic, SkloPic, PneuservisPic, AutoservisPic, StkPic, mainOpacity}) {

    const [refresh, setRefresh] = useState(true);

    const row1 = [
        {
            name: "Autoservis",
            text: "Kompletní servis od A do Z s individuálním přístupem k zákazníkovi.",
            pic: AutoservisPic
        }, 
        {
            name: "Pneuservis",
            text: "Montáž a demontáž pneumatik, včetně vyvážení disků. Opravy defektů. Prodej pneumatik a disků.",
            pic: PneuservisPic
        },
        {
            name: "Klimatizace",
            text: "Servis a doplnění klimatizace.",
            pic: KlimaPic
        }
    ];

    const row2 = [
        {
            name: "Autoskla",
            text: "Výměna poškozených autoskel za nové.",
            pic: SkloPic
        }, 
        {
            name: "Diagnostika",
            text: "Diagnostika Vašeho vozu profesionálním dignostickým přístrojem, reset servisních intervalů.",
            pic: DiagnosticPic
        },
        {
            name: "STK",
            text: "Příprava a zajištění STK.",
            pic: StkPic
        }
    ];

    // show sluzby decision
    function showSluzby(e) {

        // check for screen size
        const screenHeight = window.innerHeight;

        // create unique ID
        const thisId = e.name.split("").filter(e => e !== " ").join("")
        const thisDiv = document.getElementById(thisId);

        // animate on small screen only
        let thisClass;
        
        if(thisDiv && mainOpacity === 1) {                                        
            const thisY = thisDiv.getBoundingClientRect().y

            if(thisY < screenHeight - 50){
                // show
                thisClass = "sluzbyAnimShow"
            } else {
                // hide
                thisClass = "sluzbyAnimHidden"
            }
        }

        return {thisId: thisId, thisClass: thisClass}
    }

    // refresh everytime you scroll
    function scrollFun() {
        setRefresh(!refresh)
    }

    // scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", scrollFun)

        return () => {
            window.removeEventListener("scroll", scrollFun)
        }
    })

    return(
        <>
            <div 
            ref={main}
            className="scrollMarginTop fullW">
                <div 
                className="page1 fc"
                style={{
                    opacity: mainOpacity,
                    transition: "1s"
                }}
                >
                    
                    <div className="container fc gap1">
                        <div className="fcl pad2 borderB1 gap1">
                            <p 
                            className={"title darkT"}
                            onClick={() => main.current.scrollIntoView()}
                            >Služby</p>
                            <h1>Nabízím kompletní servis osobních a užitkových motorových vozidel všech značek.</h1>
                            
                        </div>

                        <div className="sluzby ">
                            <div className="serviceCard ">
                                {row1.map(e => {
                                    const thisEl = showSluzby(e);

                                    return(
                                        <div 
                                        id={thisEl.thisId}
                                        key={e.name}
                                        className={"card " + thisEl.thisClass}
                                        onClick={() => kontakt.current.scrollIntoView()}
                                        >
                                            <div className="cardTopic">
                                                <img 
                                                src={e.pic} 
                                                alt={e.name}
                                                width="50px"
                                                />
                                            </div>
                                            <h2>{e.name}</h2>
                                            <p>{e.text}</p>
                                        </div>
                                    )
                                })}
                            </div>

                            <div 
                            className="serviceCard"
                            >
                                {row2.map(e => {
                                    const thisEl = showSluzby(e);

                                    return(
                                        <div 
                                        id={thisEl.thisId}
                                        key={e.name}
                                        className={"card " + thisEl.thisClass}
                                        onClick={() => kontakt.current.scrollIntoView()}
                                        >
                                            <div className="cardTopic">
                                                <img 
                                                src={e.pic} 
                                                alt={e.name}
                                                width="50px"
                                                />
                                            </div>
                    
                                            <h2>{e.name}</h2>
                                            <p>{e.text}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="borderB1Top" 
                        style={{

                        }}
                        >
                            <div className="frc pad2Top gap3">
                                <img className="" src={certificateImg} alt="official" height={40}></img>

                                <div 
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "left",
                                    alignItems: "start",
                                    width: "200px",

                                }}
                                >
                                    <img src={motulImg} height={40} alt="Motul oil"></img>
                                    <p 
                                    style={{
                                        opacity: 0.8,
                                        fontSize: "10.5px",
                                        fontWeight: ""
                                    }}>Oficiální prodejce olejů Motul</p>
                                    <p 
                                    style={{
                                        opacity: 0.8,
                                        fontSize: "12px"
                                    }}></p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}