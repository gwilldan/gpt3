import React from 'react';
import "./Possibility.css";
import imgPoss from "../../assets/possibility.png";

function Possibility(props) {
    return (
        <div id="Possibility" className='gpt3__possibilities'>
            <div className='gpt3__possibilities-cont'>
                <div className='gpt3__possibilities-img'>
                    <img className='gpt3__possibilities-img_img' src={imgPoss} alt="imagePossibilities" />
                </div>
                <div className='gpt3__possibilities-texts'>
                    <p>Request Early Access to Get Started</p>
                    <h2 className='gradient__text'>The possibilities are <br /> beyond your imagination</h2>
                    <p className='gpt3__features-list_p'>Yet bed any for travelling assistance indulgence unpleasing. Not <br /> thoughts all exercise blessing. Indulgence way everything joy <br /> alteration boisterous the attachment. Party we years to order <br /> allow asked of.</p>
                    <p className='gradient__subtext'>Request Early Access to Get Started</p>
                </div>
            </div>

            <div className='gpt3__possibilities-get'>
                <p>Request Early Access to Get Started</p>
                <div>
                    <button className='possibilities__button'>Get Started</button>
                </div>
                <h3>Register today & start exploring the endless possiblities.</h3>
            </div>
        </div>
    );
}

export default Possibility;