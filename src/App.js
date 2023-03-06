import React, {useState}from "react";
import "./App.css";
import {Brand, Navbar, NavMobile } from "./components/componentIndex";
import {Blogs, Features, Footer, Header, Possibility, WhatGPT3} from "./containers/containerIndex";
import {BrowserRouter as Router} from "react-router-dom";

function App() {

    const [toggle, SetToggle] = useState(false);

    return(
        <div className="App gradient__bg ">
            <Router> 
                <Navbar toggle={toggle} SetToggle={SetToggle}/>
                <div className="theBody">
                    <NavMobile toggle={toggle} SetToggle={SetToggle} />
                    <Header />
                    <Brand />
                    <WhatGPT3 />
                    <Features />
                    <Possibility />
                    <Blogs />
                    <Footer />
                </div>
            </Router>
        </div>
    )
}

export default App;
