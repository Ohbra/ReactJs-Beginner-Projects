import { useState } from "react";
import data from "./data.js";

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [multiSelection, setMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(itemId) {
        setSelected(itemId === selected ? null : itemId);
    }

    function handleMultiSelection(itemId) {
      const cpyMultiple = [...multiple];
      cpyMultiple.indexOf(itemId) == -1
        ? cpyMultiple.push(itemId)
        : cpyMultiple.splice(cpyMultiple.indexOf(itemId), 1);

      setMultiple(cpyMultiple);

      console.log(itemId)
    }

    return <div className="wrapper">
        <div className="accordion">
            <button onClick={()=> setMultiSelection(!multiSelection)}>Enable Multiple Selection - {multiSelection ? 'On' : 'Off'}</button>
            {
                data && data.length > 0 ?
                data.map((item) => <div className="item" key={item.id}>
                    <div  className="title" onClick={
                        multiSelection 
                            ? () => handleMultiSelection(item.id)
                            : () => handleSingleSelection(item.id)
                    }>
                        <h3>{item.question}</h3>
                        <span>+</span>
                    </div>

                    {selected === item.id || multiple.indexOf(item.id) != -1
                        ? (
                            <div className="content">
                                <p>{item.answer}</p>
                            </div>
                          ) 
                        : ( "" )}
                </div>)
                : <div>Data Not Found</div>
            }
        </div>
    </div>
}