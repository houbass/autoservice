

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
            <h1>galery</h1>
        </div>
        </>
    )
}