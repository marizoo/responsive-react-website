import React from "react";
import { Article } from "../../components";
import "./blogStyle.css";

const blogA = {
    id: "a01",
    title: "How music help coders",
    date: "Jan 04 2022",
    imgUrl: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
};

const blogB = [
    {
        id: "a02",
        title: "Coding buddies",
        date: "Feb 13 2022",
        imgUrl: "https://images.pexels.com/photos/3153199/pexels-photo-3153199.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: "a03",
        title: "Excel at team work",
        date: "Mar 10 2022",
        imgUrl: "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: "a04",
        title: "How coffee affects your brain",
        date: "Apr 21 2022",
        imgUrl: "https://images.pexels.com/photos/5882705/pexels-photo-5882705.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
        id: "a05",
        title: "Modern work culture",
        date: "May 28 2022",
        imgUrl: "https://images.pexels.com/photos/5257759/pexels-photo-5257759.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
];

const Blog = () => {
    return (
        <div id="blog" className="blog section__padding">
            <div className="blog-heading">
                <h1 className="gradient__text">
                    Read all about it,
                    <br />
                    Fresh from the oven
                </h1>
            </div>
            <div className="blog-container">
                <div className="blog-container_groupA">
                    <Article
                        imgUrl={blogA.imgUrl}
                        title={blogA.title}
                        date={blogA.date}
                    />
                </div>
                <div className="blog-container_groupB">
                    {blogB.map((blog) => (
                        <Article
                            key={blog.id}
                            imgUrl={blog.imgUrl}
                            title={blog.title}
                            date={blog.date}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
