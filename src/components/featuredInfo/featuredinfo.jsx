import React from 'react'
import cardData from './card-data'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './featuredinfo.scss'

export default function featuredInfo() {
    return (
        <div className="featured-sec">
            {
                cardData.map(data => {
                    return (
                        <div className="featured-card">
                            <h3>{data.cardTitle}</h3>
                            <span className="amount">{data.amount}</span> 
                            <span className="percent">{data.incrementPercent} <ArrowDownward/>
                             </span>
                             <p>{data.text}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}