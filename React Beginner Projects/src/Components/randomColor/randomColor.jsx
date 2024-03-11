import { useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState(null);
  const [color, setColor] = useState("white");

  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [colorType, color])
  

 function utility(limit){
    return Math.round(Math.random() * limit);
 }

  function handleRGB() {
    let r = utility(256)
    let g = utility(256)
    let b = utility(256)

    console.log(color)

    // setColor(`rgb${r},${g},${b}`)
    setColor(`rgb(${r},${g},${b})`)
  }

  function handleHEX() {
    let hexColor = "#";
    let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    for (let index = 0; index < 6; index++) {
        hexColor += `${hex[utility(hex.length)]}`;
   
    }
    console.log(hexColor)
    setColor(hexColor)
  }

  return (
      <div   style={{ 
        width:"90vw",
        height:"80vh",
        backgroundColor: color}}
        >
        <button onClick={() => setColorType("RGB")}>Change RGB</button>
        <button onClick={() => setColorType("HEX")}>Change HEX</button>
        <button onClick={colorType == "RGB" ? handleRGB : handleHEX}>
          Generate Random Color
        </button>

        <div>
          <h1>{colorType}</h1>
          <h1>{color}</h1>
        </div>
      </div>

  );
}
