import React, { useState, Component } from 'react';
// import { constHours, medianSize } from '../RetreatSelection/RetreatSize';
// import { isOvernight } from '../RetreatSelection/RetreatType';
import Price from './Price';


class GeneralRecreationItem extends Component {
    state = {
        price: this.props.price
    }
    render() {
        const {
            title,
            id,
            price, 
            index,
            link
        } = this.props;
        return(
            <li key={index}>
                <input
                    className='ck'
                    type="checkbox"
                    id={`custom-checkbox-${id}`}
                    name={this.name}
                    value={ Math.trunc(price) }
                    //checked={checkedState[index]}
                    //onChange={() => handleOnChange(index, price)}
                />
                <label> 
                    <a href={link}>
                        {title}
                    </a>  
                    <Price price={ this.state.price } index={ index }/>
                </label>
            </li>
        )
    }
}

export default GeneralRecreationItem;