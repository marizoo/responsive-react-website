import React from "react";
import {
    Footer,
    Blog,
    Possibility,
    Features,
    What,
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
            <What />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
};

export default App;

// MIN 1.33.14
