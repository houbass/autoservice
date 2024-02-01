import { useState } from "react";
import { useEffect } from "react";


export default function Sluzby({main, kontakt, DiagnosticPic, KlimaPic, SkloPic, PneuservisPic, AutoservisPic, StkPic, mainOpacity }) {

    const [refresh, setRefresh] = useState(true);

    const row1 = [
        {
            name: "Autoservis",
            text: "Kompletní autoservis, výměna olejů a filtrů, brzd, tlumičů, rozvodových řemenů a řetězů, spojek, opravy motorů",
            pic: AutoservisPic
        }, 
        {
            name: "Pneuservis",
            text: "Kompletní pneuservis, přezutí, vyvážení, opravy defektů pneumatik",
            pic: PneuservisPic
        },
        {
            name: "Klimatizace",
            text: "Servis a doplnění klimatizace",
            pic: KlimaPic
        }
    ];

    const row2 = [
        {
            name: "Výměna Autoskel",
            text: "Výměna nebo oprava poškozeného lepeného autoskla",
            pic: SkloPic
        }, 
        {
            name: "Diagnostika",
            text: "Diagnostika Vašeho vozu profesionálním dignostickým přístrojem, čtení chybových kódů, regenerace DPF, reset servisních intervalů",
            pic: DiagnosticPic
        },
        {
            name: "Příprava na STK",
            text: "Připravíme vaš vůz na STK",
            pic: StkPic
        }
    ];


    // show sluzby decision
    function showSluzby(e) {

        // check for screen size
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // create unique ID
        const thisId = e.name.split("").filter(e => e != " ").join("")
        const thisDiv = document.getElementById(thisId);

        // animate on small screen only
        let thisClass = "sluzbyAnimDefault"
        
        if(thisDiv && screenWidth <= 600) {                                        
            const thisY = thisDiv.getBoundingClientRect().y

            if(thisY < screenHeight - (screenHeight * 0.1)){
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
                        <h1>Nabízíme kompletní opravy a údržby osobních motorových vozidel všech značek</h1>

                        <div className="sluzby">
                            <div className="serviceCard">
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
                    </div>
                </div>
            </div>
        </>
    )
}