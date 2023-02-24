import React from 'react';
import "./Header.css" ;
import hero from "../../assets/ai.png";
import people from "../../assets/people.png";

function Header(props) {
    return (
        <div className='gpt3__header section__padding ' id='Header'>
            <div className='gpt3__header-hero'>
                <div className='gpt3__header-hero_text'>
                    <h3 className='gpt3__header-hero_text_h1 gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h3>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                </div>
                <div className='gpt3__header-hero_input'>
                    <input type="text" placeholder='Your Email Address' ></input>
                    <button className='header__button'>Get Started</button>
                </div>
                <div className='gpt3__header-hero_people'>
                    <img src={people} alt="People Joined" />
                    <p>1600 People requested accessed a visit in last 24 hours</p>
                </div>
            </div>
            <div className='gpt3__header-img'>
                <img src={hero} alt="hero.img" />
            </div>
        </div>
    );
}

export default Header;