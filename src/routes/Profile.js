import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import './Profile.css';
export default function Profile(props) {
    const {location, history} = props;
    const redirect = () => {
        if(location.state === undefined){
            history.push('/');
        }
    }
    useEffect(redirect,[]);
    if(location.state){
        const {id, name, img, bg} = location.state;
        console.log(id, name, img, bg);
    return (
        <>
         <header className='Profile'>
        <div className="status_bar">
            <div className="left_item"><i className="fas fa-plane"></i><i className="fas fa-wifi"></i></div>
            <div className="center_item"><span>17</span>:<span>33</span></div>
            <div className="right_item"><i className="far fa-moon"></i><i className="fab fa-bluetooth-b"></i><span><span>100</span>%</span><i className="fas fa-battery-full"></i></div>
        </div>
        <div className="header_inner">
            <h1></h1>
            <div className="left_item"><Link to="/"><i className="fas fa-times"></i></Link></div>
            <div className="right_item"><a href="#"><i className="fas fa-user"></i></a></div>
        </div>
    </header>
        <main id="Profile">
        <section className="background" style={{backgroundImage: (bg ? ("url("+bg+")") : null)}}></section>
        <section className="profile">
            <div className="profile_img" style={{backgroundImage: (img ? ("url("+img+")") : null)}}></div>
            <div className="profile_cont">
                <span className="profile_name">{name}</span>
                <input type="text" className="profile_email" placeholder="UserID@gmail.com"/>
                <ul className="profile_menu">
                   <li><a href="#"><span className="icon"><i className="fas fa-comment"></i></span>My Chatroom</a></li> 
                   <li><a href="#"><span className="icon"><i className="fas fa-pencil-alt"></i></span>Edit Profile</a></li> 
                </ul>
            </div>
        </section>
        </main>
        </>
    )} else return null;
}
