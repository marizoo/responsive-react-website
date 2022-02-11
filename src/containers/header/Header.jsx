import React from "react";
import "./headerStyle.css";
import people from "../../images/people.png";

const Header = () => {
    return (
        <div id="home" className="header section__padding">
            <div className="header-content">
                <h1 className="gradient__text">
                    Learn coding the extraordinary way
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    libero laudantium molestiae magni eaque aliquam officia
                    voluptatem nobis ab officiis harum illum nulla vel veritatis
                    dicta nemo vero, perferendis enim.
                </p>
                <div className="header__content__input">
                    <input type="email" placeholder="youe email address" />
                    <button type="button">Get Started</button>
                </div>
                <div className="header-content_people">
                    <img src={people} alt="people" />
                    <p>1325 Students have registered this year.</p>
                </div>
            </div>
            <div className="header-image">
                <img
                    src="https://images.pexels.com/photos/6146970/pexels-photo-6146970.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="people learning to code"
                />
            </div>
        </div>
    );
};

export default Header;
