import React from "react";
import {
    Footer,
    Blog,
    Possibility,
    Features,
    About,
    Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./appStyle.css";

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <About />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
};

export default App;

// MIN 2.55.13
