import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbarStyle.css";

const Menu = () => (
    <>
        <p>
            <a href="#home">Home</a>
        </p>
        <p>
            <a href="#about">About</a>
        </p>
        <p>
            <a href="#possibility">Possibility</a>
        </p>
        <p>
            <a href="#features">Features</a>
        </p>
        <p>
            <a href="#blog">Blog</a>
        </p>
    </>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar__links">
                <span className="navbar__links_logo">COODER</span>
                <div className="navbar__links_container">
                    <Menu />
                </div>
            </div>
            <div className="navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu_container_links">
                            <Menu />
                            <div className="navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
