import { useState } from 'react'
import data from './data.js'

export default function Index(){

    const[selected, setSelected] = useState(null);

    function handleClick(itemId){
        setSelected(itemId === selected ? null : itemId);
    }

    return(
        <div className="wrapper">
            <div>
                <ul>

                    {
                        data && data.length > 0
                        ? data.map(item => {
                            return (
                                <div key={item.id} onClick={()=>handleClick(item.id)}>
                                    <h3>{item.question}</h3>
                                    <span>+</span>

                                    {selected === item.id
                                     ?<div>
                                        <p>{item.answer}</p>
                                     </div>
                                     :""
                                     }
                                </div>
                            )
                        })
                        : <li>data not found</li>

                    }
                </ul>
            </div>
        </div>
    )
}