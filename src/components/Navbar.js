import { useEffect, useRef, useState } from "react"

//libraries
import Lottie from "lottie-react";
import anime from 'animejs';

//lottie data
import geers from "../animations/geers.json"

//components
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

export default function Navbar({ header, main, kontakt, galery, about, setIntroAnimClass }) {

    const geersRef = useRef();

    const [selections, setSelections] = useState(["0%", "0%", "0%", "0%"]);
    const [goUpVisibility, setGoUpVisibility] = useState("goUpHidden")
    const [firstTImeHandler, setFirstTimeHandler] = useState(true);
    const [prevScroll, setPrevScroll] = useState(0);
    const [menuVisibility, setMenuVisibility] = useState("mobileMenuHidden");

    const menu = [
        {
            name: "Služby",
            ref: main.current
        }, 
        {
            name: "Kontakt",
            ref: kontakt.current
        },
        {
            name: "Galerie",
            ref: galery.current
        },
        {
            name: "O Mně",
            ref: about.current
        },
    ]

    //INTRO ANIMATION AGAIN
    async function introAnim() {
        setIntroAnimClass(["carMotionDefault", "introUnderlineDefault", "introTitleDefault"]);

        // Wait for the next render cycle
        await new Promise((resolve) => setTimeout(resolve, 0));

        // Set the second value
        setIntroAnimClass(["carMotion", "introUnderline", "introTitle"]);
    };


    //go up button visibility
    function goUpVisibilityFun() {
        if(window.scrollY > 100) {
            setGoUpVisibility("goUpShow");
            setFirstTimeHandler(false);
        } else if(window.scrollY < 100 && firstTImeHandler === false) {
            setGoUpVisibility("goUpHide");
        }
    }

    //checking for scroll direction
    function scrollDirection() {

        const scrollTop = window.scrollY;

        if(prevScroll <= scrollTop) {
            geersRef.current.setDirection(1);
        } else{
            geersRef.current.setDirection(-1);
        }

        setPrevScroll(scrollTop);
    }

    //scrolling function
    function scrolling() {
        const screen = window.innerHeight / 4;
        const screen2 = window.innerHeight / 1.5;

        //check scroll direction
        scrollDirection()

        if(
        main.current.getBoundingClientRect().y < screen && 
        kontakt.current.getBoundingClientRect().y > screen
        ) {
            setSelections(["100%", "0%", "0%", "0%"]);
        } else if(
        kontakt.current.getBoundingClientRect().y < screen && 
        galery.current.getBoundingClientRect().y > screen
        ) {
            setSelections(["0%", "100%", "0%", "0%"]);
        } else if(
            galery.current.getBoundingClientRect().y < screen &&
            about.current.getBoundingClientRect().y > screen2
        ) {
            setSelections(["0%", "0%", "100%", "0%"]);
        } else if(
            about.current.getBoundingClientRect().y < screen2
        ) {
            setSelections(["0%", "0%", "0%", "100%"]);
        }else{
            setSelections(["0%", "0%", "0%", "0%"]);
        }

        goUpVisibilityFun()

        geersRef.current.play();
        const timeout = setTimeout(() => {
            geersRef.current.pause();
        }, 5)

        return () => {
            clearTimeout(timeout)
        }
    }
    

    //SCROLLING EVENT LISTENER
    useEffect(() => {
        window.addEventListener("scroll", scrolling, { passive: true });

        return () => {
            window.removeEventListener("scroll", scrolling, { passive: true });
        }
    });

    useEffect(() => {
        geersRef.current.stop();
        scrolling();
        // eslint-disable-next-line
    }, []);


    //MOBILE MENU
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

    //HIDE MOBILE MENU
    function hideMenu() {
        let path1;
        let path3;

        if(menuVisibility === "mobileMenuHidden" || menuVisibility === "mobileMenuHide") {

        } else{
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
        style={{
            position: "fixed",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            background: "var(--navBg)",
            width: "100%",
            height: "60px",
            zIndex: "1",
        }}>

            <Lottie 
            onClick={() => {
                header.current.scrollIntoView();
                hideMenu();
                introAnim();

            }} 
            style={{
                cursor: "pointer",
                paddingLeft: "var(--divPadSide)",
                width: "40px"
            }}
            lottieRef={geersRef}
            animationData={geers}
            loop={true}
            />

            <MobileMenu 
            menu={menu} 
            selections={selections} 
            menuVisibility={menuVisibility} 
            showMenu={showMenu} 
            svgRef={svgRef} 
            path1ref={path1ref} 
            burgerPath1={burgerPath1} 
            burgerColor={burgerColor} 
            path2={path2} 
            path3ref={path3ref} 
            burgerPath3={burgerPath3}
            />

            <Menu 
            menu={menu} 
            selections={selections}
            />

        </div>
        <div 
        onClick={() => {
            header.current.scrollIntoView();
            hideMenu();
            introAnim();
        }} 
        className={goUpVisibility}
        style={{
            position: "fixed",
            zIndex: "10",
            right: "var(--divPadSide)",
            background: "var(--navBg)",
            width:"30px",
            height: "30px",
            padding: "20px",
            borderRadius: "50%", 
            cursor: "pointer"
        }}>
            <svg 
            viewBox="0 0 551.13 551.13" 
            xmlns="http://www.w3.org/2000/svg" 
            id="svg-1d98"
            fill="orange" 
            >
                <g stroke="orange">
                <path strokeWidth="40" d="m275.565 189.451 223.897 223.897h51.668l-275.565-275.565-275.565 275.565h51.668z"></path>
                </g>
            </svg>
        </div>
        </>
    )
}