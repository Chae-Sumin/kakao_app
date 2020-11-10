import React from 'react'

function PlusFriends({icon, text}) {
    return (
        <li><a href="#">
            <i className={icon}></i>{text}
        </a></li>
    )
}

export default PlusFriends
