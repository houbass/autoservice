

export default function MobileMenu({ menu, selections, menuVisibility, showMenu, svgRef, path1ref, burgerPath1, burgerColor, path2, path3ref, burgerPath3 }) {


    return(
        <>
            <div 
            onClick={showMenu}
            className="mobileBtn"
            style={{
                position: "absolute",
                right: "var(--divPadSide)",
                cursor: "pointer"
            }}>
                <svg ref={svgRef} width="40" height="40" viewBox="0 0 100 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref={path1ref} d={burgerPath1} fill={burgerColor}/>
                    <path d={path2} fill={burgerColor}/>
                    <path ref={path3ref} d={burgerPath3} fill={burgerColor}/>
                </svg>
            </div>

            <div 
            className={menuVisibility}
            style={{
                position: "fixed",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                gap: "10px",
                top: "60px",
                right: "0px",
                background: "var(--navBg)",
                paddingRight: "var(--divPadSide)",
                paddingBottom: "var(--divPadSide)",
                paddingLeft: "var(--divPadSide)",
                borderRadius: "0 0 0 20px",
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
                                showMenu();
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