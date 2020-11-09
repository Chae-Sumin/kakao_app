import React from 'react';
import './Header.css';
export default function Header({tab_name, left_btn, right_btn, friend_num, header_icon}) {
    if(tab_name === undefined) {tab_name = ''}
    if(left_btn === undefined) {left_btn = ''}
    if(right_btn === undefined) {right_btn = ''}
    if(friend_num === undefined) {friend_num = ''}
    if(header_icon === undefined) {header_icon = ''}
    return (
    <header className={tab_name}>
        <div className="status_bar">
            <div className="left_item"><i className="fas fa-plane"></i><i className="fas fa-wifi"></i></div>
            <div className="center_item"><span>17</span>:<span>33</span></div>
            <div className="right_item"><i className="far fa-moon"></i><i className="fab fa-bluetooth-b"></i><span><span>100</span>%</span><i className="fas fa-battery-full"></i></div>
        </div>
        <div className="header_inner">
            <h1>{tab_name} <i className={header_icon}></i><span>{friend_num}</span></h1>
            <div className="left_item"><a href="#">{(left_btn.indexOf("fa") === -1) ? (left_btn) : (<i className={left_btn}></i>)}</a></div>
            <div className="right_item"><a href="#">{(right_btn.indexOf("fa") === -1) ? (right_btn) : (<i className={right_btn}></i>)}</a></div>
        </div>
    </header>
    )
}
