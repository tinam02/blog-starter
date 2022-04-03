import React from "react";
import { Link } from "react-router-dom";
import List from "../components/List";
import articleContent from "./article-content";

const ArticleList = () => {
  return (
    <>
      <List articles={articleContent} />
    </>
  );
};

export default ArticleList;
