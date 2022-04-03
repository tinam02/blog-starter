import React from "react";
import { Link } from "react-router-dom";

const List = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <>
          <Link key={index} to={`/article/${article.name}`}>
            <h2>{article.title}</h2>
            <p>{article.content.substring(0, 100)}</p>
          </Link>
          <hr />
        </>
      ))}{" "}
    </>
  );
};

export default List;
