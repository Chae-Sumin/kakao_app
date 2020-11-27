import React from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.css';
export default function Nav() {

    return (
            <nav className="tab_bar">
                <ul>
                    <li><NavLink to="/" activeClassName="active" exact><i className="fas fa-user"></i>Friends</NavLink></li>
                    <li><NavLink to="/Chats" activeClassName="active"><i className="fas fa-comment"></i>Chats</NavLink></li>
                    <li><NavLink to="/Find" activeClassName="active"><i className="fas fa-search"></i>Find</NavLink></li>
                    <li><NavLink to="/More" activeClassName="active"><i className="fas fa-ellipsis-h"></i>More</NavLink></li>
                </ul>
            </nav>
    )
}
