import React from 'react'
import './insightComponent.scss'
import date from '../../assets/image/date.png'


const InsightComponent = ({ props }) => {    
    return (
        <div className='insightContainer'>
            <div className="leftBox">
                <img src={props.image} alt="" />
            </div>
            <div className="rightBox">
                <div className="title">
                    <p>
                        Insight
                    </p>
                </div>
                <div className="content">
                    {props.title}
                </div>
                <div className="date">
                    <img src={date} alt="" />
                    <p>{props.insightsDate}</p>
                </div>
            </div>
        </div>
    )
}

export default InsightComponent