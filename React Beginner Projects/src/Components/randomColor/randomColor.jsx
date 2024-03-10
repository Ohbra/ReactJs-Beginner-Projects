import { useState } from "react"

export default function RandomColor(){
    const[colorType, setColorType] = useState(null);

    console.log("colorType -> "+colorType)
    
    function handleRGB(){
        console.log("handleRGB -> "+colorType)
    }

    function handleHEX(){
        console.log("handleHEX -> "+colorType)
    }

    return(
        <div>
            <button onClick={()=>setColorType("RGB")}>Change RGB</button>
            <button onClick={()=>setColorType("HEX")}>Change HEX</button>
            <button onClick={colorType == "RGB" ? handleRGB : handleHEX}>Generate Random Color</button>

        </div>
    )
}