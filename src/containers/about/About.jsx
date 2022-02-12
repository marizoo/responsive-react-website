import React from "react";
import { Feature } from "../../components";
import "./aboutStyle.css";

const About = () => {
    return (
        <div id="about" className="about section__margin">
            <div className="about-feature">
                <Feature
                    title="About Us"
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti vel minima ratione aperiam rem amet, tempore consequuntur animi aut molestiae totam et, veritatis possimus vitae iste quisquam! Corporis, sint."
                />
            </div>
            <div className="about-heading">
                <h1 className="gradient__text">
                    Grab your future by the effing horn
                </h1>
                <p>Explore the impossible</p>
            </div>
            <div className="about-container">
                <Feature
                    title="Fun Mentors"
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. iste quisquam! Corporis, sint."
                />
                <Feature
                    title="Science Based"
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, sint.iste quisquam!"
                />
                <Feature
                    title="Aim for Succes"
                    text="Lorem, consectetur adipisicing elit. iste quisquam! Corporis, sint. ipsum dolor sit amet "
                />
            </div>
        </div>
    );
};

export default About;
