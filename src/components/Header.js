

export default function Header({ header, ToolPic, introAnimClass }) {

    return(
        <>
        <div 
        ref={header}
        style={{
            width: "100%",
            paddingTop: "60px"
        }}>
            <header>
                <img 
                src={ToolPic}
                style={{
                    width: "100%",
                    height: "800px",
                    objectFit: "cover"
                }}
                />
            </header>
        </div>

        <div 
        style={{
            position: "absolute",
            top: "350px",
            background: "rgba(40, 44, 52, 0.9)",
            width: "100%",
            padding: "50px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            justifyContent: "center"

        }}>
            <div
            style={{
                width: "90%",
                maxWidth: "1000px"
            }}>
                <svg 
                width="100%" 
                viewBox="0 0 430 50"
                >
                <text 
                className={introAnimClass[0]}
                x="11" 
                y="41"
                >Autoservis Laube</text>
                </svg>

                <div 
                className={introAnimClass[1]}>
                </div>
            </div>
        </div>
        </>
    )
}