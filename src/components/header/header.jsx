import React from 'react'
import './header.scss'
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
import ProfileImg from '../../assets/images/LaurenTanea.png'

export default function header() {
return (
<header>
    <div className="header-wrapper">
        <div className="logo-area">
            <a href="#" className="brand-logo">Admin <span>Panel</span></a>
        </div>

        <div className="icons-area">
            <ul className="flex-align-center">
                <li><a href="#" className="contains-badge"><NotificationsNone/> <span>12</span></a></li>
                <li><a href="#"><Language/></a></li>
                <li><a href="#"><Settings/></a></li>
                <li><a href="#" className="profile-img"><img src={ProfileImg} alt="" /></a></li>
            </ul>
        </div>

    </div>
</header>
)
}