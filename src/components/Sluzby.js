

export default function Sluzby({main, DiagnosticPic, KlimaPic, SkloPic, PneuservisPic, AutoservisPic, StkPic, mainOpacity }) {

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
                        <div className="serviceCard">
                            {row1.map(e => {
                                return(
                                    <div 
                                    key={e.name}
                                    className="card">
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

                                return(
                                    <div 
                                    key={e.name}
                                    className="card">
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
        </>
    )
}