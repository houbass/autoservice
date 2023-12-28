
//LOTTIE LIB
import Lottie from "lottie-react";

//LOTTIE DATA
import ServiceAnim from "../animations/service.json";



export default function Main({ DiagnosticPic, KlimaPic, SkloPic, PneuservisPic, AutoservisPic }) {

    const row1 = [
        {
            name: "Diagnostika",
            text: "Diagnostika Vašeho vozu profesionálním dignostickým přístrojem, čtení chybových kódů, regenerace DPF, reset servisních intervalů",
            pic: DiagnosticPic
        }, 
        {
            name: "Autoservis",
            text: "Kompletní autoservis, výměna olejů a filtrů, brzd, tlumičů, rozvodových řemenů a řetězů, spojek, opravy motorů",
            pic: AutoservisPic
        },
        {
            name: "Pneuservis",
            text: "Kompletní pneuservis, přezutí, vyvážení, opravy defektů pneumatik",
            pic: PneuservisPic
        }
    ];

    const row2 = [
        {
            name: "Výměna autoskel",
            text: "Výměna nebo oprava poškozeného lepeného autoskla",
            pic: SkloPic
        }, 
        {
            name: "Klimatizace",
            text: "Servis a doplnění klimatizace",
            pic: KlimaPic
        },
        {
            name: "Příprava na STK",
            text: "Připravíme vaš vůz na STK.....",
            pic: AutoservisPic
        }
    ];

    return(
        <>
            <div 
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                //background: "rgb(100, 108, 120)",
                paddingTop: "50px"
            }}>


                <div 
                className="serviceCard"
                style={{paddingTop: "20px"}}
                >
                    {row1.map(e => {

                        return(
                            <div
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
                style={{paddingTop: "20px"}}
                >
                    {row2.map(e => {

                        return(
                            <div
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