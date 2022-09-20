import React from "react";
import "./Articles.css";
import { Fade } from "react-reveal";
import ArticleSection from "../../components/articleSection/ArticleSection";
import { articles } from "../../portfolio.js";

function Articles(props) {
  const theme = props.theme;
  console.log(`articleID ${props.article}`);
  const article = articles[props.article];
  console.log("articleID", article);

  return (
    <div className="main" id="article">
      <div className="article-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="article-header" style={{ color: theme.text }}>
            {article.title}
          </h1>
        </Fade>
      </div>
      <div className="article-body-div">
        {article.sections.map((section) => {
          return <ArticleSection section={section} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Articles;
