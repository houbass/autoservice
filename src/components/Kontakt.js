export default function Kontakt({ kontakt }) {

    const email = "smrdimikhaar@hodne.cz";

    return(
        <>
            <div 
            ref={kontakt}
            className="scrollMarginTop fullW">
                <div className="page2 fc">
                    <div className="container fc gap1">
                        <div className="fc pad1 borderB2">
                            <h1 className="pad2">Kontakt</h1>
                            <p>Máte nějaký problém nebo potřebujete poradit? Jsme tu pro vás.</p>
                        </div>

                        <div className="serviceCard">
                            <div className="fcl">
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
                            
                            <iframe 
                            className="map" 
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10142.292765101642!2d14.929176808036887!3d50.54210975805526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470951f9bf2e6521%3A0x1aa775c8cccf01a5!2sAutoservis%20-%20Laube!5e0!3m2!1scs!2scz!4v1704545667585!5m2!1scs!2scz" 
                            height="250" 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade" 
                            >
                            </iframe>     
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}