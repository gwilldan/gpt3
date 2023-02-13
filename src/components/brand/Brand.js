import React from 'react';
import "./Brand.css"

// IMPORTING BRAND LOGOS
import Google from "../../assets/google.png";
import Slack from "../../assets/slack.png";
import Atlassian from "../../assets/atlassian.png";
import Dropbox from "../../assets/dropbox.png";
import Shopify from "../../assets/shopify.png";

function brand() {
    return (
        <div className='gpt3__header-sponsors section__padding'>
                <img src={Google} alt="Google" />
                <img src={Slack} alt="Slack" />
                <img src={Atlassian} alt="Atlassian" />
                <img src={Dropbox} alt="Dropbox" />
                <img src={Shopify} alt="Shopify" />
        </div>
    );
}

export default brand;