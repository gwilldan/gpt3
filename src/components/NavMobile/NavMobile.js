import React from 'react';
import "./navMobile.css";
import {HashLink as Link} from "react-router-hash-link"

function NavMobile(props) {
    function hideNav() {
        let nav = document.getElementById("mobileNav");
        nav.style.display = "none";
    }
    
    return (
        <div id="mobileNav" className='gpt3__Navbar-mobile'>
            <div className='gpt3__Navbar-mobile_links'>
                <Link className='link' to='#top' onClick={hideNav}>Home</Link>
                <Link className='link' to='#WhatGPT3' onClick={hideNav} scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'center' })}>What is GPT3?</Link>
                <Link className='link' to='#Features' onClick={hideNav} scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Open AI </Link>
                <Link className='link' to='#Possibility' onClick={hideNav} scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })} >Case Studies</Link>
                <Link className='link' to='#Blogs' onClick={hideNav} scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Library</Link>
            </div>
        </div>
    );
}

export default NavMobile;