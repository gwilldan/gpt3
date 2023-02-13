import React from 'react';
import "./Navbar.css";
// import { RiMenu3line, RiCloseLin} from "react-icons/ri"
import logo from "../../assets/logo.svg";
import { Link } from 'react-router-dom';

function navbar(props) {
    return (
        <div className='gpt3__Navbar section__padding'>
            <div className='gpt3__Navbar-links'>
                <div className='gpt3__Navbar-links_logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='gpt3__Navbar-links_links'>
                    <Link className='link' to='#Header'>Home</Link>
                    <Link className='link' to='#WhatGPT3'>What is GPT3?</Link>
                    <Link className='link' to='#openAi'>Open AI</Link>
                    <Link className='link' to='#CaseStudies'>Case Studies</Link>
                    <Link className='link' to='#Library'>Library</Link>
                </div>
                <div className='gpt3__Navbar-links_buttons'>
                    <button className='button'>Sign in</button>
                    <button className='button button__clicked'>Sign up</button>
                </div>
            </div>
        </div>
    );
}

export default navbar;