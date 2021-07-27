import React from 'react'
import './sidebar.scss'
import {LineStyle, Timeline, TrendingUp, WorkOutline, Group, Storefront, MailOutline , DynamicFeed, ChatBubbleOutline, Report  } from '@material-ui/icons'

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
                    <li><a href="#"><Group /> <span>users</span></a></li>
                    <li><a href="#"><Storefront /><span>products</span></a></li>
                    <li><a href="#"><TrendingUp /><span>transactions</span></a></li>
                    <li><a href="#"><Report /><span>reports</span></a></li>
                </ul>
             </div>

             <div className="sidebar-menu">
             <h2>notifications</h2>
             <ul>
                    <li><a href="#"><MailOutline /> <span>mail</span></a></li>
                    <li><a href="#"><DynamicFeed /><span>feedbacks</span></a></li>
                    <li><a href="#"><ChatBubbleOutline /><span>messages</span></a></li>
                </ul>
             </div>

             <div className="sidebar-menu">
             <h2>staff</h2>
             <ul>
                    <li><a href="#"><WorkOutline /> <span>manage</span></a></li>
                </ul>
             </div>
               
               
            
        </div>
    )
}
