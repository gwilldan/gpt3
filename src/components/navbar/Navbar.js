import React from 'react';
import "./Navbar.css";
// import { RiMenu3line, RiCloseLin} from "react-icons/ri"
import logo from "../../assets/logo.svg";
import {HashLink as Link} from "react-router-hash-link";
import {FaTimes, FaHamburger, FaBars} from "react-icons/fa"

function navbar(props) {
    return (
        <div className='gpt3__Navbar'>
            <div className='gpt3__Navbar-links'>
                <div className='gpt3__Navbar-links_logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='gpt3__Navbar-links_links'>
                    <Link className='link' to='#Header'>Home</Link>
                    <Link className='link' to='#WhatGPT3'>What is GPT3?</Link>
                    <Link className='link' to='#Features'>Open AI</Link>
                    <Link className='link' to='#Possibility'>Case Studies</Link>
                    <Link className='link' to='#Blogs'>Library</Link>
                </div>
                <div className='gpt3__Navbar-links_buttons'>
                    <button className='button'>Sign in</button>
                    <button className='button button__clicked'>Sign up</button>
                    <button className='hamburger'><FaBars /></button>
                </div>
            </div>
        </div>
    );
}

export default navbar;