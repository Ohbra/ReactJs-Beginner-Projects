import { useState } from "react";
import data from "./data.js";

export default function Accordion() {
    const [selected, setSelected] = useState(null);

    function handleClick(itemId) {
        setSelected(itemId === selected ? null : itemId);
    }

    return <div className="wrapper">
        <div className="accordion">
            {
                data && data.length > 0 ?
                data.map((item) => <div className="item" key={item.id}>
                    <div  className="title" onClick={() => handleClick(item.id)}>
                        <h3>{item.question}</h3>
                        <span>+</span>
                    </div>

                    {selected === item.id ? (
                        <div className="content">
                            <p>{item.answer}</p>
                        </div>
                        ) : (
                        ""
                        )}
                </div>)
                : <div>Data Not Found</div>
            }
        </div>
    </div>
}