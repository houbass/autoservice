


export default function MobileMenu({ menu, selections }) {

    return(
        <>
            <button 
            
            style={{
                position: "absolute",
                right: "20px"
            }}>MENU</button>

            <div 
            style={{
                //paddingRight: "20px",
                //display: "flex",
                //flexDirection: "row",
                //gap: "20px",

                position: "fixed",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                gap: "10px",
                top: "60px",
                right: "0px",
                background: "black",
                paddingRight: "20px",
                paddingBottom: "20px",
                paddingLeft: "20px",
                borderRadius: "0 0 0 20px"
            }}>
                {menu.map((e, i) => {
                    return(
                        <div 
                        key={i}
                        >
                            <button 
                            className="navBtn"
                            onClick={() => {
                                e.ref.scrollIntoView();
                            }}
                            >{e.name}</button>
                            <div
                            style={{
                                background: "white",
                                width: selections[i],
                                height: "3px",
                                marginTop: "-3px",
                                transition: "1s",
                                opacity: selections[i][0]
                            }}>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}