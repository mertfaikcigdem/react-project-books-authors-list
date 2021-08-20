import React from "react";
import { Link } from "react-router-dom";
import BooksData from "../../BooksData.js";

function Books() {
  return (
    <div>
      <div className="container">
        {BooksData.map((book, index) => (
          <div className="author-card" key={index}>
            <img src={book.img} />
            <span className="author-name">{book.authorName}</span>
            <span className="author-name">{book.bookName}</span>
            <Link className="author-link" to={`books/${book.id}`}>
              İncele
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
