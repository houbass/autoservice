
export default function Map({ kontakt }) {

    return(
        <>
            <div 
            className="scrollMarginTop"
            ref={kontakt}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                background: "rgb(245, 245, 245)",
                color: "rgb(40, 44, 52)",
                paddingTop: "50px",
                paddingBottom: "200px",
            }}>

                <h1 style={{paddingBottom: "100px"}}>Kde nás najdete:</h1>
                <div 
                className="serviceCard" 
                style={{
                    alignItems: "center",
                }}
                >
                    <div 
                    style={{
                        textAlign: "left",
                        paddingLeft: "10px"
                    }}>
                        <p style={{fontSize: "17px", fontWeight: "bold"}}>Adresa:</p>
                        <p>Horní Bukovina 52, 295 01</p>

                        <p style={{fontSize: "17px", fontWeight: "bold"}}>Telefon:</p>
                        <p>+420 739 821 125</p>

                        <p style={{fontSize: "17px", fontWeight: "bold"}}>Email:</p>
                        <p>smrdimikhaar@hodne.cz</p>

                        <p style={{fontSize: "17px", fontWeight: "bold"}}>IČO:</p>
                        <p>17144965</p>
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
        </>
    )
}