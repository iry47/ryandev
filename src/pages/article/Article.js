import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Articles from "../../containers/article/Articles";
import { useParams } from "react-router-dom";

// import ArticleImg from "./ArticleImg";
import "./Article.css";
import { Fade } from "react-reveal";

function Article(props) {
  const theme = props.theme;
  const { articleId } = useParams();

  // start article at the top of the page
  window.scrollTo(0, 0);

  return (
    <div className="article-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-article">
        <Articles article={articleId} theme={props.theme} />
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Article;
