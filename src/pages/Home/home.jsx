import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/featuredinfo'
import './home.scss'

export default function home() {
    return (
        <div className="home">
            <div className="container">
               <FeaturedInfo />
            </div>
        </div>
    )
}