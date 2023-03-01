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
                <div className="theBody">
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
