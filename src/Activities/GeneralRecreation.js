import React, { Component } from 'react';
import axios from 'axios';
import './Activities.css';
import ActivityHeader from './ActivityHeader';
import ActivityItem from './ActivityItem';
import './Activities.css';

export var genRecTotalPrice = 0;


class GeneralActivitiesApp extends Component {
    //Setting State
    state = {
        activities: []
    };
    //Getting Information from ACF REST API
    componentDidMount() {
        axios.get(`https://refreshingmountain.com/wp-json/wp/v2/activities?include=18712,18755,18746,18744,18708,18714`)
        .then(res => {
            this.setState({ activities: res.data });
            console.log(this.state.activities)
        })
    }

    handleOnChange(index) {
        return '';
    }
    
    render() {
        return(
                <>
                <div className='single-activity-section'>
                    <ActivityHeader
                        title="General Recreation Activities:"
                        total={genRecTotalPrice} 
                    />
                    
                    <ul className="no-bullets">
                        {this.state.activities.map( (activity, index) =>

                            <ActivityItem key={index}
                                className='ck'
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name={activity.title.rendered}
                                value={activity.acf.price}
                                link={activity.link}
                                //checked={checkedState[index]}
                                onChange={() => this.handleOnChange(index)}
                            />

                        )}  
                    </ul>
                    </div>
                </>
              
        )
    }
}

export default GeneralActivitiesApp;