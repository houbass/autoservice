


export default function Header({ header, ToolPic }) {

    

    return(
        <>
        <div 
        ref={header}
        style={{
            //background: "orange",
            //maxWidth: "1000px",
            width: "100%",
            paddingTop: "60px"
        }}>
            <header>
                <img 
                src={ToolPic}
                style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover"
                }}
                />
            </header>
        </div>
        </>
    )
}