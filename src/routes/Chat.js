import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Chat.css'

export default function Chat(props) {
    const {location , history} = props;
    const redirect = () => {
        if(location.state === undefined){
            history.replace('/Chats');
        }
    }
    useEffect(redirect);
    if(location.state){
    return (
        <>
        <header className="Chat">
        <div className="status_bar">
            <div className="left_item"><i className="fas fa-plane"></i><i className="fas fa-wifi"></i></div>
            <div className="center_item"><span>17</span>:<span>33</span></div>
            <div className="right_item"><i className="far fa-moon"></i><i className="fab fa-bluetooth-b"></i><span><span>100</span>%</span><i className="fas fa-battery-full"></i></div>
        </div>
        <div className="header_inner">
            <h1>{location.state.name}</h1>
            <div className="left_item"><Link to="/Chats"><i className="fas fa-angle-left"></i></Link></div>
            <div className="right_item"><a href="#"><i className="fas fa-search"></i><i className="fas fa-bars"></i></a></div>
        </div>
        </header>
         <main id="Chat">
        <span className="date_info">Wednesday, April 12, 2018</span>
        <div className="chat_box my">
            <span className="chat">Hello!</span>
            <span className="chat">Hello! This is a test message. Hello!</span>
            <span className="chat">This is a test message.</span>
            <span className="chat_time"><span>16</span>:<span>30</span></span>
        </div>
        <div className="chat_box other">
            <div className="other_info">
                <a href="#"><span className="profile_img" style={{backgroundImage: 'url('+location.state.img+')'}}></span></a>
                <span className="profile_name">{location.state.name}</span>
            </div>
            <span className="chat">And this is an answer</span>
            <span className="chat">And this is an answer And this is an answer</span>
            <span className="chat">{location.state.comment}</span>
            <span className="chat_time"><span>17</span>:<span>33</span></span>
        </div>
    </main>
    <footer>
        <span className="plus_btn"><a href="#"><i className="fas fa-plus"></i></a></span>
        <div className="text_box">
            <input type="text" className="text_field" />
            <span className="emoticon_btn"><a href="#"><i className="far fa-smile"></i></a></span>
            <span className="voice_btn"><a href="#"><i className="fas fa-microphone"></i></a></span>
        </div>
    </footer>   
        </>
    )
    }else return null;
}
