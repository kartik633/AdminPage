import React from 'react'
import "./sidebar.css"
import { Error, GraphicEq, LineStyle, Timelapse, Timeline, TrendingUp, VerifiedUserSharp } from '@material-ui/icons'
import { ModalManager } from '@material-ui/core'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <VerifiedUserSharp/>
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <Timeline/>
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <GraphicEq/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Timeline/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Timelapse/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Error/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
