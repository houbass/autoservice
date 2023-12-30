

export default function About({ about }) {

    return(
        <>
        <div 
        className="scrollMarginTop"
        ref={about} 
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            background: "rgb(245, 245, 245)",
            color: "rgb(40, 44, 52)",
            paddingTop: "50px",
            paddingBottom: "700px",
        }}
        >
            <div 
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                maxWidth: "1000px",
                width: "100%",
            }}>
                <h1>O mě</h1>
                <p>Pár vět o tom jak kalit, přitom zarobit a bejt fachman na všecko...</p>
            </div>
        </div>
        </>
    )
}