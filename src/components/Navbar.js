
export default function Navbar({ main, kontakt }) {

    return(
        <>
        <div 
        style={{
            position: "fixed",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            background: "orange",
            width: "100%",
            height: "50px",
            zIndex: "1"
        }}>
            <button onClick={() => main.current.scrollIntoView()}>služby</button>
            <button onClick={() => kontakt.current.scrollIntoView()}>kontakt</button>

        </div>
        </>
    )
}