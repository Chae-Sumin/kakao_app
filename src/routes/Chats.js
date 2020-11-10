import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ChatList from '../components/ChatList'
import Nav from '../components/Nav'
import Header from '../components/Header'
import imageJSON from '../data/imageJSON.json'
import './Chats.css'
export function Chats(){
    const [names, setNames] = useState([]);
    const [comment, setComment] = useState([]);
    const tab_name = "Chats";
    const left_btn = "Edit";
    const header_icon = "fas fa-caret-down";
    let getData = async () => {
        const {data : names} = await axios.get('https://jsonplaceholder.typicode.com/users');
        const {data : comment} = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setComment(comment);
        setNames(names);
    }
    useEffect(getData,[]);
        return (
            <>
                <Header tab_name = {tab_name} left_btn = {left_btn} header_icon = {header_icon}/>
                <main id="Chats">
                    <div className="search_box">
                        <div className="search_inner">
                            <i className="fas fa-search"></i>
                            <input type="search" name="search" id="search" placeholder="Find firends, chats, Plus Friends"/>
                        </div>
                    </div>
                    <section className="main_section">
                        <ul>
                            {names.map((name, idx)=>(
                                <ChatList 
                                id = {name.id}
                                name = {name.name}
                                comment = {comment[idx].name}
                                img = {imageJSON[idx].img}
                                /> ))}
                        </ul>
                    </section>
                    <div className="chat_btn">
                        <a href="#">
                        <i className="fas fa-comment"></i>
                        </a>
                    </div>
                </main>
                <Nav />
            </>
        )
    }

export default Chats
