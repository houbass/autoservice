import { useRef, useState } from "react";

//LIBRAIRES
import anime from 'animejs';

export default function MobileMenu({ menu, selections }) {

    const [menuVisibility, setMenuVisibility] = useState("mobileMenuHidden");

    //burger SVG ref and Paths
    const svgRef = useRef();
    const path1ref = useRef();
    const path3ref = useRef();

    //MOBILE BURGER STATES
    const [burgerColor, setBurgerColor] = useState("rgba(255, 255, 255, 0.9)");
    const [path2, setPath2] = useState("M10 29H100V49H0V29Z")

    //burger SVG paths
    const burgerPath1 = "M0 0H100V20H0V0Z";
    const crossPath1 = "M11.5381 0L99.6658 62.2438L88.1277 78.58L7.15256e-07 16.3362L11.5381 0Z";
    const burgerPath3 = "M0 58H100V78H0V58Z";
    const crossPath3 = "M0 62.2519L88.3527 2.3586e-06L99.8722 16.3494L11.5195 78.6013L0 62.2519Z";


    //SHOW/HIDE MOBILE MENU
    function showMenu() {
        let path1;
        let path3;

        if(menuVisibility === "mobileMenuHidden" || menuVisibility === "mobileMenuHide") {
            setMenuVisibility("mobileMenuShow");
            setBurgerColor("rgba(255, 70, 70, 1)");

            path1 = crossPath1;
            setPath2(null);
            path3 = crossPath3;

            anime({
                targets: path1ref.current,
                d: [
                  { value: path1
                  },
                ],
                easing: 'easeOutQuad',
                duration: 300,
                loop: false
              });

              anime({
                targets: path3ref.current,
                d: [
                  { value: path3
                  },
                ],
                easing: 'easeOutQuad',
                duration: 100,
                loop: false
              });
        } else {
            setMenuVisibility("mobileMenuHide");
            setBurgerColor("rgba(255, 255, 255, 1)");

            path1 = burgerPath1;
            setPath2("M10 29H100V49H0V29Z");
            path3 = burgerPath3;

            anime({
                targets: path1ref.current,
                d: [
                  { value: path1
                  },
                ],
                easing: 'easeOutQuad',
                duration: 100,
                loop: false
              });

              anime({
                targets: path3ref.current,
                d: [
                  { value: path3
                  },
                ],
                easing: 'easeOutQuad',
                duration: 500,
                loop: false
              });
        }
    }

    return(
        <>
            <div 
            onClick={showMenu}
            className="mobileBtn"
            style={{
                position: "absolute",
                right: "20px",
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
                background: "black",
                paddingRight: "20px",
                paddingBottom: "20px",
                paddingLeft: "20px",
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