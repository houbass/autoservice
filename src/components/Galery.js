

export default function Galery({ galery }) {

    return(
        <>
        <div 
        className="scrollMarginTop"
        ref={galery} 
        style={{
            height:"800px"
        }}
        >
            <h1>galerie</h1>
        </div>
        </>
    )
}