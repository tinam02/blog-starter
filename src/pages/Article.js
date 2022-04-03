import React from "react";
import { useParams } from "react-router-dom";
import List from "../components/List";
import articleContent from "./article-content";

const Article = () => {
  let { name } = useParams();
  const currArticle = articleContent.find((article) => article.name === name);
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  if (!currArticle) {
    return <h1>Article not found!</h1>;
  }
  return (
    <>
      <h1> {currArticle.title}</h1>
      {articleContent.map((p, i) => (
        <p key={i}>{p.content}</p>
      ))}
  <br />

      <h2>Other articles</h2>
      <List articles={otherArticles && otherArticles} />
    </>
  );
};

export default Article;
