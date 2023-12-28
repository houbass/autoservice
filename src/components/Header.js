


export default function Header({ ToolPic }) {

    

    return(
        <>
        <div 
        style={{
            //background: "orange",
            //maxWidth: "1000px",
            width: "100%"
        }}>
            <header>
                <img 
                src={ToolPic}
                style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover"
                }}
                />
            </header>
        </div>
        </>
    )
}