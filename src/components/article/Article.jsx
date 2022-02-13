import React from "react";
import "./articleStyle.css";

const Article = ({ imgUrl, title, date }) => {
    return (
        <div className="blog-container_article">
            <div className="blog-container_article-img">
                <img src={imgUrl} alt="blog" />
            </div>
            <div className="blog-container_article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    );
};

export default Article;
