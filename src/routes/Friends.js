import React from 'react'
import {Link} from 'react-router-dom'
import Nav from '../components/Nav'
import Header from '../components/Header'
import "./Friends.css";

export default function Friends() {
    return (
        <>
            <Header tab_name = "Friends" friend_num="1" left_btn = "Manage" right_btn = "fas fa-cog"/>
            <main id="Friends">
                <div className="search_box">
                    <div className="search_inner">
                        <i className="fas fa-search"></i>
                        <input type="search" name="search" id="search" placeholder="Find firends, chats, Plus Friends"/>
                    </div>
                </div>
                <section className="main_section">
                    <header><h2>My Profile</h2></header>
                    <ul>
                        <li><Link to="/Profile"><span className="profile_img"></span><span className="profile_name">My Name</span></Link></li>
                        <li><a href="#"><span className="profile_img"></span><span className="profile_name">Friends' Names Display</span></a></li>
                    </ul>
                </section>
                <section className="main_section">
                    <header><h2>Friends</h2></header>
                    <ul>
                        <li><a href="#">
                            <span className="profile_img"></span>
                            <span className="profile_name">Friend Name</span>
                            <span className="profile_messages">Have a good day, See you soon.</span>
                        </a></li>
                        <li><a href="#">
                            <span className="profile_img"></span>
                            <span className="profile_name">Friend Name</span>
                            <span className="profile_messages">Have a good day, See you soon.</span>
                        </a></li>
                        <li><a href="#">
                            <span className="profile_img"></span>
                            <span className="profile_name">Friend Name</span>
                            <span className="profile_messages">Have a good day, See you soon.</span>
                        </a></li>
                        <li><a href="#">
                            <span className="profile_img"></span>
                            <span className="profile_name">Friend Name</span>
                            <span className="profile_messages">Have a good day, See you soon.</span>
                        </a></li>
                    </ul>
                </section>
            </main>
      <Nav />
            
        </>
    )
}
