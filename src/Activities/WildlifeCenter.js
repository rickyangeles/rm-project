import React, { Component, useState } from 'react';
import './Activities.css';
import axios from 'axios';
import { constHours, medianSize } from '../RetreatSelection/RetreatSize';
import { isOvernight } from '../RetreatSelection/RetreatType';
import { render } from 'react-dom';



export var wildlifeCenterTotalPrice = 0;

const getFormattedPrice = (price) => `$${price.toFixed(0)}`;
const wildlifeCenter = [];

class WildlifeCenterApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {wildlifeCenter};
      }


    componentDidMount() {
        axios.get(`https://refreshingmountain.com/wp-json/wp/v2/activities?include=18712,18755,18746,18744,18708,18714`)
        .then(res => {
            const wildlifeCenter = res.data;
            this.setState({ wildlifeCenter });
           
        })
    }

    handleOnChange = (position) => {
        const totalPrice = wildlifeCenter.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    if (isOvernight === false) {
                        console.log(wildlifeCenter[index].label);
                        return sum + ((wildlifeCenter[index].price * constHours) / medianSize);
                    }
                    else if (isOvernight === true) {
                        console.log(wildlifeCenter[index].label);
                        return sum + (((wildlifeCenter[index].price * constHours) / medianSize) * 0.75);
                    }
                }
                return sum;
            },
            0
        );
        wildlifeCenterTotalPrice = totalPrice;
    };

    render() {
        
        return (
            <div className="single-activity-section" id="wildlife">
                <div className="single-activity-header">
                    <div className="activity-name">
                    <h3 className="heading-style">Wildlife Center Activities</h3>
                    </div>
                    <div className="activity-per-person">
                        <div>
                        <p>Average Price Per Person:</p>
                        <span>{getFormattedPrice(wildlifeCenterTotalPrice)}</span>
                        </div>
                    </div>
                </div>
                <p className="single-activity-description">Nunc interdum lacus sit amet orci. Quisque id mi. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Pellentesque commodo eros a enim.</p>
                <ul className="no-bullets">
                    
                    {wildlifeCenter.map((activity, index) => {
                    if (constHours !== "" && medianSize !== "" && isOvernight !== "") {
                        if (isOvernight === false) {
                            //console.log(genRec[index].label);
                            activity.acf.price = Math.round((activity.acf.price * constHours) / medianSize);
                        }
                        else if (isOvernight === true) {
                            //console.log(genRec[index].label);
                            activity.acf.price = Math.round(((activity.acf.price * constHours) / medianSize) * 0.75);
                        } else if (isOvernight === null) {
                            activity.acf.price = 0;
                        }
                    }else {
                        activity.acf.price = 0;
                    }
                        return (
                            <li key={index}>
                                <input
                                    className='ck'
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={activity.title.rendered}
                                    value={activity.title.rendered}
                                    //checked={checkedState[index]}
                                    //onChange={handleOnChange(index)}
                                />
                                <label>
    
                                    <a href={activity.link}>{activity.title.rendered}</a> <span>${activity.acf.price}/PER</span>
                                    <p>{activity.acf.short_description}</p>
                                </label>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default WildlifeCenterApp;