import React from 'react'
import {HashRouter, Route} from 'react-router-dom';
import './App.css'; 
import Friends from './routes/Friends'
import More from './routes/More'
import Chats from './routes/Chats'
import Find from './routes/Find'
import Profile from './routes/Profile'
import Chat from './routes/Chat'

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Friends} />
      <Route path="/More" component={More} />
      <Route path="/Chats" component={Chats} />
      <Route path="/Find" component={Find} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Chat" component={Chat} />
    </HashRouter>
  );
}

export default App;
