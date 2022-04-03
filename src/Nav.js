import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      {" "}
      <div>
        <Link to="/" className="logo">
          LOGO
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/article-list">Articles</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
