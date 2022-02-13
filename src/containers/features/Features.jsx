import React from "react";
import { Feature } from "../../components";
import "./featuresStyle.css";

const featuresData = [
    {
        title: "Improve your CS knowledge",
        text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
        title: "Work with kind, and supportive folks",
        text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
        title: "immerse yourself be wild and free",
        text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
        title: "Stay healthy, keep fit, eat clean",
        text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
    },
];

const Features = () => {
    return (
        <div id="features" className="features section__padding">
            <div className="features-heading">
                <h1 className="gradient__text">
                    If you are happy and you know it clap your hands. Clap clap
                    clap! Turn around and shake it all about!
                </h1>
                <p>Eat hotdog and book your classes today</p>
            </div>
            <div className="features-container">
                {featuresData.map((data, index) => (
                    <Feature key={index} title={data.title} text={data.text} />
                ))}
            </div>
        </div>
    );
};

export default Features;
