import React  from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import MemberList from '../components/MemberList';
import profiles from '../data/memberList.json';
import "./Friends.css";

export default function Friends() {
    const myProfile = profiles[0];
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
                            <MemberList 
                                id = {myProfile.id}
                                name = {myProfile.name}
                                email = {myProfile.email}
                                text = {myProfile.profileMsg}
                                img = {myProfile.profileImg}
                                bg = {myProfile.backgroundImg}
                            />
                    </ul>
                </section>
                <section className="main_section">
                    <header><h2>Friends</h2></header>
                    <ul>
                        {profiles.map(profile=>{
                            if(profile.id != 0) {return(
                            <MemberList 
                                id = {profile.id}
                                name = {profile.name}
                                email = {profile.email}
                                text = {profile.profileMsg}
                                img = {profile.profileImg}
                                bg = {profile.backgroundImg}
                            />
                        )}})}
                    </ul>
                </section>
            </main>
      <Nav />
            
        </>
    )
}
