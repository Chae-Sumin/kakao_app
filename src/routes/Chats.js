import React, {Component} from 'react'
import axios from 'axios';
import ChatList from '../components/ChatList'
import Nav from '../components/Nav'
import Header from '../components/Header'
import imageJSON from '../data/imageJSON.json'
import './Chats.css'
export class Chats extends Component {
    state = {
        names : [],
        comments : [],
        imgs : [],
        tab_name : "Chats",
        left_btn : "Edit",
        header_icon : "fas fa-caret-down",
    }
    getData = async () => {
        const {data : names} = await axios.get('https://jsonplaceholder.typicode.com/users');
        const {data : comments} = await axios.get('https://jsonplaceholder.typicode.com/comments');
        const {data : imgs} = await axios.get('https://jsonplaceholder.typicode.com/photos');
        this.setState({names,comments,imgs})
    }
    componentDidMount(){
        this.getData();
    }
    render() {
        const {names,comments,imgs,tab_name,left_btn,header_icon} = this.state;
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
                            {names.map((name, idx) => (
                                <ChatList 
                                id = {name.id}
                                name = {name.name}
                                comment = {comments[idx].name}
                                img = {imageJSON[idx].img}
                                />  ))}
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
}

export default Chats
