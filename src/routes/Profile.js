import React from 'react';
import {Link} from 'react-router-dom'
import './Profile.css';
export default function Profile() {
    return (
        <>
         <header className='Profile'>
        <div class="status_bar">
            <div class="left_item"><i class="fas fa-plane"></i><i class="fas fa-wifi"></i></div>
            <div class="center_item"><span>17</span>:<span>33</span></div>
            <div class="right_item"><i class="far fa-moon"></i><i class="fab fa-bluetooth-b"></i><span><span>100</span>%</span><i class="fas fa-battery-full"></i></div>
        </div>
        <div class="header_inner">
            <h1></h1>
            <div class="left_item"><Link to="/"><i class="fas fa-times"></i></Link></div>
            <div class="right_item"><a href="#"><i class="fas fa-user"></i></a></div>
        </div>
    </header>
        <main id="Profile">
        <section class="background"></section>
        <section class="profile">
            <div class="profile_img"></div>
            <div class="profile_cont">
                <span class="profile_name">My Name</span>
                <input type="text" class="profile_email" placeholder="UserID@gmail.com"/>
                <ul class="profile_menu">
                   <li><a href="#"><span class="icon"><i class="fas fa-comment"></i></span>My Chatroom</a></li> 
                   <li><a href="#"><span class="icon"><i class="fas fa-pencil-alt"></i></span>Edit Profile</a></li> 
                </ul>
            </div>
        </section>
        </main>
        </>
    )
}
