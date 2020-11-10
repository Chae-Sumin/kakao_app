import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Nav from '../components/Nav';
import Header from '../components/Header';
import FriendList from '../components/FriendList';
import imageJSON from '../data/imageJSON.json';
import "./Friends.css";

export default function Friends() {
    const [names, setNames] = useState([]);
    let getData = async () => {
        const {data : names} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setNames(names);
    }
    useEffect(getData,[]);
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
                        <li><Link to={{
                            pathname : "/Profile",
                            state : {id : 0, name: "My Name", img : false, bg: false}
                            }}><span className="profile_img"></span><span className="profile_name">My Name</span></Link></li>
                        <li><a href="#"><span className="profile_img"></span><span className="profile_name">Friends' Names Display</span></a></li>
                    </ul>
                </section>
                <section className="main_section">
                    <header><h2>Friends</h2></header>
                    <ul>
                        {names.map((name, idx)=>(
                            <FriendList 
                                id = {name.id}
                                name = {name.name}
                                text = {name.username}
                                img = {imageJSON[idx].img}
                                bg = {imageJSON[idx].bg}
                            />
                        ))}
                    </ul>
                </section>
            </main>
      <Nav />
            
        </>
    )
}
