import React from 'react'
import { Link } from 'react-router-dom'


function MemberList({id, name, email, img, text, bg}) {
    return (
        <li>
            <Link to={{
                pathname : '/Profile',
                state : {id, name, email, img, bg}
                }}>
                <span className="profile_img" style={{backgroundImage : 'url('+img+')'}}></span>
                <span className="profile_name">{name}</span>
                <span className="profile_messages">{text}</span>
            </Link>
        </li>
    )
}

export default MemberList
