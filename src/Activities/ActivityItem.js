import React, {useState} from "react";
import { constHours, medianSize } from '../RetreatSelection/RetreatSize';
import { isOvernight } from '../RetreatSelection/RetreatType';


function ActivityItem(props) {
    const [checkedState, setCheckedState] = useState(0);
    const handleOnChange = (price) => {
        
        if (constHours !== "" && medianSize !== "" && isOvernight !== "") {
            if (isOvernight === false) {
                //console.log(genRec[index].label);
                price = Math.round((props.value * constHours) / medianSize);
            }
            else if (isOvernight === true) {
                //console.log(genRec[index].label);
                price = Math.round(((props.value * constHours) / medianSize) * 0.75);
            } else if (isOvernight === null) {
                price = 0;
            }
        }else {
            price = 0;
        }
    }
    return(   
    
        <li key={props.id}>
            <input
                className='ck'
                type="checkbox"
                id={`custom-checkbox-${props.id}`}
                name={props.name}
                value={props.title}
                // /checked={}
                onChange={() => handleOnChange(props.price)}
            />
            <label>
                <a href={props.link} target="_blank">{props.name}</a> <span>${Math.trunc(props.value)}/PER</span>
            </label>
        </li>
    )
}


export default ActivityItem;
