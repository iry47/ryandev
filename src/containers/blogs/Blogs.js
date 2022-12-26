import React from "react";
import "./Blogs.css";
import { Fade } from "react-reveal";
import { blogs } from "../../portfolio";
import BlogCard from "../../components/blogCard/BlogCard";

function Blogs(props) {
  const theme = props.theme;
  return (
    <div className="main" id="blogs">
      <div className="blogs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="blogs-header" style={{ color: theme.text }}>
            Blogs
          </h2>
        </Fade>
      </div>
      <div className="blogs-body-div">
        {blogs.blogs.map((blog) => {
          return <BlogCard key={blog.title} blog={blog} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Blogs;
