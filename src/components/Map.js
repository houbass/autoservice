

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
                paddingTop: "60px",
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

                        <h4>Email:</h4>
                        <p>smrdimikhaar@hodne.cz</p>

                        <h4>IČO:</h4>
                        <p>17144965</p>
                    </div>
                    

                </div>

            </div>
        </>
    )
}