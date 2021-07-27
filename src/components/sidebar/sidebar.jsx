import React from 'react'
import './sidebar.scss'
import {LineStyle, Timeline, TrendingUp} from '@material-ui/icons'

export default function sidebar() {
    return (
        <div className="sidebar">
           
             <div className="sidebar-menu">
             <h2>dashboard</h2>
             <ul>
                    <li className="active"><a href="#"><LineStyle /> <span>Home</span></a></li>
                    <li><a href="#"><Timeline /><span>Analytics</span></a></li>
                    <li><a href="#"><TrendingUp /><span>Sales</span></a></li>
                </ul>
             </div>

             <div className="sidebar-menu">
             <h2>quick menu</h2>
             <ul>
                    <li className="active"><a href="#"><LineStyle /> <span>Home</span></a></li>
                    <li><a href="#"><Timeline /><span>Analytics</span></a></li>
                    <li><a href="#"><TrendingUp /><span>Sales</span></a></li>
                </ul>
             </div>

             <div className="sidebar-menu">
             <h2>notifications</h2>
             <ul>
                    <li className="active"><a href="#"><LineStyle /> <span>Home</span></a></li>
                    <li><a href="#"><Timeline /><span>Analytics</span></a></li>
                    <li><a href="#"><TrendingUp /><span>Sales</span></a></li>
                </ul>
             </div>

             <div className="sidebar-menu">
             <h2>staff</h2>
             <ul>
                    <li className="active"><a href="#"><LineStyle /> <span>Home</span></a></li>
                    <li><a href="#"><Timeline /><span>Analytics</span></a></li>
                    <li><a href="#"><TrendingUp /><span>Sales</span></a></li>
                </ul>
             </div>
               
               
            
        </div>
    )
}
