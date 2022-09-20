import { Accordion, Panel } from "baseui/accordion";
import React from "react";
import "./ArticleSection.css";

function ArticleSection(props) {
  const title = props.section.title ? props.section.title : null;
  const text = props.section.text ? props.section.text : null;
  const images = props.section.images ? props.section.images : null;
  const points = props.section.points ? props.section.points : null;
  const dropdown = props.section.dropdown ? props.section.dropdown : null;

  return (
    <div>
      {title ? <h3>{title}</h3> : null}
      <div className="article-images">
        {images
          ? images.map((image) => {
              return (
                <div className="article-image">
                  <img
                    key={image}
                    src={require(`../../assets/images/${image}`)}
                  />
                </div>
              );
            })
          : null}
      </div>
      {text ? <p>{text}</p> : null}
      <ul className="article-point">
        {points
          ? points.map((point, i) => {
              return <li key={i}>{point}</li>;
            })
          : null}
      </ul>
      {dropdown ? (
        <Accordion onChange={({ expanded }) => console.log(expanded)}>
          <Panel>{dropdown}</Panel>
        </Accordion>
      ) : null}
    </div>
  );
}

export default ArticleSection;
