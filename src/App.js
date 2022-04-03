import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import HomePage from "./pages/Home";
import "./App.css";
import Page404 from "./pages/Page404";

class App extends Component {
  render() {
    return (
      <>
        {" "}
        <div className="page-wrapper">
          <Nav />
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/article-list"} element={<ArticleList />} />
            <Route path={"/article/:name"} element={<Article />} />
            <Route path={"*"} element={<Page404 />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
