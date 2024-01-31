




export default function Menu({ menu, selections }) {

    return(
        <>
            <div 
            className="menu"
            style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                position: "absolute",
                right: "var(--divPadSide)"
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