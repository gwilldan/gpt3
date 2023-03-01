import React from 'react';
import "./Blogs.css";

// images 
import blog01 from "../../assets/blog01.png"
import blog02 from "../../assets/blog02.png"
import blog03 from "../../assets/blog03.png"
import blog04 from "../../assets/blog04.png"
import blog05 from "../../assets/blog05.png"



function Blogs(props) {

    const read = "Read Full Article";
    const date = "Sep 26, 2021"

    return (
        <div id="Blogs"  className='gpt3__blogs     section__padding'>
            <h3  className='gpt3__header-hero_text_h1    gradient__text'>A lot is happening, <br /> We are blogging about it.</h3>
            <div className='gpt3__blog-container'>
                
                <div     className='gpt3__blog-container-tile'>
                    <img src={blog01} alt="blog01"/>
                    <div>
                        <p>{date}</p>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <p>{read}</p>
                    </div>
                </div>

 
                <div className='gpt3__blog-container-tile'>
                    <img src={blog02} alt="blog02"/>
                    <div>
                        <p>{date}</p>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <p>{read}</p>
                    </div>
                </div>


                <div  className='gpt3__blog-container-tile'>
                    <img src={blog03} alt="blog03"/>
                    <div>
                        <p>{date}</p>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <p>{read}</p>
                    </div>
                </div>


                <div  className='gpt3__blog-container-tile'>
                    <img src={blog04} alt="blog04" />
                    <div>
                        <p>{date}</p>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <p>{read}</p>
                    </div>
                </div>


                <div className='gpt3__blog-container-tile'>
                    <img src={blog05} alt="blog05"/>
                    <div>
                        <p>{date}</p>
                        <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                        <p>{read}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;