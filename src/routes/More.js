import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import plusJSON from '../data/plusList.json'
import profiles from '../data/memberList.json'
import './More.css'
import PlusFriends from '../components/PlusFriends'

export default function More() {
    const myProfile = profiles[0];
    return (
        <>
            <Header tab_name = "More" left_btn = "" right_btn = "fas fa-cog"/>
            
            <main id="More">
                <section className="user_info">
                    <span className="profile_img"></span>
                    <span className="profile_info">
                        <span className="profile_name">{myProfile.name}</span>
                        <span className="profile_email">{myProfile.email}</span>
                    </span>
                    <span className="chat_img"><a href="#"><i className="far fa-comment"></i></a></span>
                </section>
                <section className="user_menu">
                    <ul>
                        <li><a href="#"><i className="far fa-smile"></i>Emoticons</a></li>
                        <li><a href="#"><i className="fas fa-paint-brush"></i>Themes</a></li>
                        <li><a href="#"><i className="far fa-hand-peace"></i>Plus Friends</a></li>
                        <li><a href="#"><i className="far fa-user-circle"></i>Account</a></li>
                    </ul>
                </section>
                <section className="plus_friends">
                    <header>
                        <h2>Plus Friends</h2>
                        <span><i className="fas fa-info-circle"></i> Learn More</span>
                    </header>
                    <ul className="plus_list">
                        {plusJSON.map(plus => (
                            <PlusFriends icon={plus.icon} text={plus.text}/>
                        ))}
                    </ul>
                </section>
                <section className="more_app">
                    <ul>
                        <li><a href="#"><span className="app_icon"></span>Kakao Story</a></li>
                        <li><a href="#"><span className="app_icon"></span>Path</a></li>
                        <li><a href="#"><span className="app_icon"></span>Kakao friends</a></li>
                    </ul>
                </section>
            </main>  
            <Nav />
        </>
    )
}
