import React from "react";
import "./App.css";
import {Articles, Brand, Navbar, Feature } from "./components/componentIndex";
import {Blogs, Features, Footer, Header, Possibility, WhatGPT3} from "./containers/containerIndex";
import {BrowserRouter as Router} from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link"

function App() {

    return(
        <div className="App gradient__bg ">
            <Router>
                <div className="app__head">    
                    <Navbar className="fixed" Link={Link}/>
                    <Header id="header"/>
                </div>
                <div>
                    <Brand />
                    <WhatGPT3/>
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
