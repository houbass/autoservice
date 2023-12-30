
//LOTTIE LIB
import Lottie from "lottie-react";

//LOTTIE DATA
import ServiceAnim from "../animations/service.json";


export default function Main({main, DiagnosticPic, KlimaPic, SkloPic, PneuservisPic, AutoservisPic, StkPic }) {

    
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
            name: "Výměna autoskel",
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
            text: "Připravíme vaš vůz na STK.....",
            pic: StkPic
        }
    ];

    return(
        <>
            <div 
            ref={main}
            className="scrollMarginTop"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                //background: "rgb(100, 108, 120)",
                paddingTop: "50px",
                paddingBottom: "50px"
            }}>

                <Lottie 
                animationData={ServiceAnim} 
                style={{
                    width: "400px"
                }}
                />
                
                <div 
                className="serviceCard"
                style={{paddingTop: "50px"}}
                >
                    {row1.map(e => {

                        return(
                            <div 
                            key={e.name}
                            className="card">
                                <div className="cardTopic">
                                    <img 
                                    src={e.pic} 
                                    width={"50%"}
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
                style={{paddingTop: "50px"}}
                >
                    {row2.map(e => {

                        return(
                            <div 
                            key={e.name}
                            className="card">
                                <div className="cardTopic">
                                    <img 
                                    src={e.pic} 
                                    width={"50%"}
                                    />
                                </div>
        
                                <h2>{e.name}</h2>
                                <p>{e.text}</p>
                            </div>
                        )
                    })}
                </div>


            </div>

        
        </>
    )
}