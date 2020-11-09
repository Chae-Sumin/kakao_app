import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
export default function ChatList({id, name, comment, img}) {
    return (
        <li>
            <Link to={{
                pathname: '/Chat',
                state : {id, name, comment, img}
            }}>
                <span className="chats_img" style={{backgroundImage : "url("+img+")"}}></span>
                <span className="chats_cont">
                    <span className="chats_name">{name}</span>
                    <span className="chats_latest">{comment}</span>
                </span>
                <span className="chats_time"><span>17</span>:<span>33</span></span>
            </Link>
        </li>
    )
}
ChatList.propTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    comment : PropTypes.string,
    img : PropTypes.string,
}
