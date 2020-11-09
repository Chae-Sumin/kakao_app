import React from 'react'
import {Link} from 'react-router-dom'
import './Chat.css'

export default function Chat(props) {
    const {location : loc, history : his} = props;
    const {name, comment, img} = loc.state;
    useEffect(() => {
        if(loc.state === undefined){
            his.push("/Chats");
        }
    },[])
    return (
        <>
        <header class="Chat">
        <div class="status_bar">
            <div class="left_item"><i class="fas fa-plane"></i><i class="fas fa-wifi"></i></div>
            <div class="center_item"><span>17</span>:<span>33</span></div>
            <div class="right_item"><i class="far fa-moon"></i><i class="fab fa-bluetooth-b"></i><span><span>100</span>%</span><i class="fas fa-battery-full"></i></div>
        </div>
        <div class="header_inner">
            <h1>{name}</h1>
            <div class="left_item"><Link to="/Chats"><i class="fas fa-angle-left"></i></Link></div>
            <div class="right_item"><a href="#"><i class="fas fa-search"></i><i class="fas fa-bars"></i></a></div>
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
                <a href="#"><span className="profile_img" style={{backgroundImage: 'url('+{img}+')'}}></span></a>
                <span className="profile_name">Friend Name</span>
            </div>
            <span className="chat">And this is an answer</span>
            <span className="chat">And this is an answer And this is an answer</span>
            <span className="chat">{comment}</span>
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
}
