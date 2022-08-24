import React from 'react'
import './Sidebar.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (

        <div className="area">
            <div><nav className="main-menu">
                <ul>
                    <li className="has-subnav">
                        <i className="fa"> <Icon icon="akar-icons:circle-fill" width="50" height="50"/><span className="Picture"></span></i>
                    </li>
                    <li className="has-subnav">
                        <i className="fa"> <Icon icon="akar-icons:circle-fill"   width="50" height="50"/><span className="UserName">GB</span></i>
                    </li>
                    <hr className="UnderLineSideBar"/> 

                    <li className="has-subnav">
                        <Link to="/TestCases">
                           <i className="faa"><Icon icon="system-uicons:create" color="#ffffff" width="30" height="50"/></i> 
                        </Link>

                    </li>
                    <li className="has-subnav">
                        <Link to="/Suite">
                            <i className="faa"><Icon icon="bi:briefcase" width="30" height="30"/></i>
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        </div>

    )
}

export default Sidebar