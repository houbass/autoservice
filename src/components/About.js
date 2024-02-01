

export default function About({ about }) {

    return(
        <>
            <div 
            ref={about}
            className="scrollMarginTop fullW">
                <div className="page2 fc">
                    <div className="container fc gap1">

                        <div className="fcl pad1 borderB2 gap1">
                            <p 
                            className="title2 whiteT"
                            onClick={() => about.current.scrollIntoView()}
                            >O Mně</p>
                            <h1 className="pad2">Praxe dělá mistra</h1>
                        </div>
                        <div>
                            <p>Pár vět o tom jak kalit, přitom zarobit a bejt fachman na všecko...</p>
                            <p>Pár vět o tom jak kalit, přitom zarobit a bejt fachman na všecko...</p>
                            <p>Pár vět o tom jak kalit, přitom zarobit a bejt fachman na všecko...</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}