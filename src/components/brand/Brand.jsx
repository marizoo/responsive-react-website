import React from "react";
import "./brandStyle.css";
import { google, atlassian, dropbox, shopify, slack } from "./import";

const Brand = () => {
    return (
        <div className="brand section__padding">
            <div>
                <img src={google} alt="google" />
            </div>
            <div>
                <img src={atlassian} alt="google" />
            </div>
            <div>
                <img src={dropbox} alt="google" />
            </div>
            <div>
                <img src={shopify} alt="google" />
            </div>
            <div>
                <img src={slack} alt="google" />
            </div>
        </div>
    );
};

export default Brand;
