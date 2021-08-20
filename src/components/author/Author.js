import React from "react";
import "./Author.css";
import { Link } from "react-router-dom";
import AuthorsData from "../../AuthorsData";

function Author() {
  return (
    <div className="container">
      {AuthorsData.map((author) => (
        <div className="author-card">
          <img src={author.img} />
          <span className="author-name">{author.authorName}</span>
          <Link className="author-link" to={`author/${author.id}`}>
            İncele
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Author;
