import React from "react";
import "./possibilityStyle.css";

const Possibility = () => {
    return (
        <div id="possibility" className="possibility section__padding">
            <div className="possibility-image">
                <img
                    src="https://images.pexels.com/photos/7108959/pexels-photo-7108959.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="possibility"
                />
            </div>
            <div className="possibility-content">
                <h4>Get 1 month free access</h4>
                <h1 className="gradient__text">
                    Your possibilities are endless like the free-flow soda at
                    burger king.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus reprehenderit vero, blanditiis doloribus vitae
                    labore harum ad amet aliquam pariatur accusamus, officiis
                    modi ex earum et? Quam iusto architecto cum.
                </p>
                <h4>Sign up for your free access</h4>
            </div>
        </div>
    );
};

export default Possibility;
