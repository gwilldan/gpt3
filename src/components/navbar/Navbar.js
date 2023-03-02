import React from 'react';
import "./Navbar.css";
// import { RiMenu3line, RiCloseLin} from "react-icons/ri"
import logo from "../../assets/logo.svg";
import {HashLink as Link} from "react-router-hash-link";
import {FaTimes, FaBars} from "react-icons/fa"

function navbar(props) {

    function dispNav() {
        let nav = document.getElementById("mobileNav").style;
        if (nav.display === "none") {
            nav.display = "flex";
        } else {
            nav.display = "none";
        }
    }

    return (
            <div className='gpt3__Navbar-links      section__padding'>
                <div className='gpt3__Navbar-links_logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='gpt3__Navbar-links_links'>
                    <Link className='link' to='#top'>Home</Link>
                    <Link className='link' to='#WhatGPT3' scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'center' })}>What is GPT3?</Link>
                    <Link className='link' to='#Features' scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Open AI </Link>
                    <Link className='link' to='#Possibility' scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })} >Case Studies</Link>
                    <Link className='link' to='#Blogs' scroll={(el) => el.scrollTo(200, 0)}>Library</Link>
                </div>
                <div className='gpt3__Navbar-links_buttons'>
                    <button className='button'>Sign in</button>
                    <button className='button button__clicked'>Sign up</button>
                    <button className='hamburger' onClick={dispNav}><FaBars /></button>
                </div>

            </div>
    );
}

export default navbar;