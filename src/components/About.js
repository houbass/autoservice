

export default function About({ about }) {

    return(
        <>
            <div 
            ref={about}
            className="scrollMarginTop fullW">
                <div className="page2 fc">
                    <div className="container fc gap1">

                        <h1>O Mně</h1>
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