import React from "react";
import "./App.css";
import {Brand, Navbar } from "./components/componentIndex";
import {Blogs, Features, Footer, Header, Possibility, WhatGPT3} from "./containers/containerIndex";
import {BrowserRouter as Router} from "react-router-dom";

function App() {

    return(
        <div className="App gradient__bg ">
            <Router>   
                <Navbar />
                <div>
                    <Header id="header"/>
                    <Brand id="brand"/>
                    <WhatGPT3 id="whatGPT3"/>
                    <Features id="features" />
                    <Possibility id="possibility" />
                    <Blogs id="blogs" />
                    <Footer id="footer" />
                </div>
            </Router>
        </div>
    )
}

export default App;
