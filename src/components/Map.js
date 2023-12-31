

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
                        <h4>Adresa:</h4>
                        <p>Bukovina bla bla bla</p>

                        <h4>Telefon:</h4>
                        <p>+420 12454788488</p>

                        <h4>Email:</h4>
                        <p>smrdimikhaar@hodne.cz</p>

                        <h4>IČO:</h4>
                        <p>123456789</p>
                    </div>
                    
                    <iframe 
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.5614692721865!2d14.926542676066264!3d50.5423277807448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470951f0817415a1%3A0xd8a49726ec89b827!2sHorn%C3%AD%20Bukovina%2053%2C%20295%2001%20Horn%C3%AD%20Bukovina!5e0!3m2!1scs!2scz!4v1703777388137!5m2!1scs!2scz" 
                    height="250" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>
        </>
    )
}