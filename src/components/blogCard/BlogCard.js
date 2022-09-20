import React from "react";
import "./BlogCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import { useHistory } from "react-router-dom";

function BlogCard(props) {
  const blog = props.blog;
  const theme = props.theme;
  const history = useHistory();
  const styles = style({
    boxShadow: `0px 2px 5px ${blog.color_code}`,
    border: `1px solid ${blog.color_code}`,
    ":hover": {
      boxShadow: `0 5px 15px ${blog.color_code}`,
    },
  });
  const button_visit = style({
    textDecoration: "none",
    color: "rgba(255, 255, 255, 1)",
    background: `${theme.accentColor}`,
    padding: "15px 15px",
    marginTop: "25px",
    borderRadius: "4px",
    borderWidth: "0px",
    marginBottom: "20px",
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    fontFamily: "Google Sans Regular",
    fontSize: "17px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 10px ${theme.accentColor}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="20px">
      <div className="blog-card" {...styles}>
        <div className="content">
          <a target="_blank" rel="noopener noreferrer">
            <div className="content-overlay"></div>
            <div
              className="blog-header"
              style={{ backgroundColor: blog.color_code }}
            >
              <img
                className="logo_img"
                src={require(`../../assets/images/${blog.image}`)}
                alt={blog.alt_name}
              />
            </div>
            {/* <div className="content-details fadeIn-top">
									<h3 className="content-title" style={{ color: theme.body }}>
										Certificate
									</h3>
								</div> */}
          </a>
        </div>
        <div className="blog-body">
          <h2 className="blog-body-title" style={{ color: theme.text }}>
            {blog.title}
          </h2>
          <h3
            className="blog-body-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {blog.subtitle}
          </h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            <p
              {...button_visit}
              style={{
                marginRight: "23px",
                textDecoration: "none",
                float: "right",
                backgroundColor: theme.accentColor,
              }}
              onClick={() => {
                history.push(`/article/${blog.url}`);
              }}
            >
              Read Article
            </p>
          </a>
        </div>
      </div>
    </Fade>
  );
}

export default BlogCard;
