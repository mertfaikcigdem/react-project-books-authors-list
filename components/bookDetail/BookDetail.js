import React, { useState, useEffect } from "react";
import "./BookDetail.css";
import BooksData from "../../BooksData";
import { useParams } from "react-router-dom";

function BookDetail() {
  let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const [booksState, setBooksState] = useState();
  const [comment, setComment] = useState();
  const [books, setBooks] = useState(BooksData);

  let { id } = useParams();

  useEffect(() => {
    setBooksState(BooksData.find((book) => book.id == id));
  }, []);

  const addComment = (e) => {
    e.preventDefault();
    // console.log(BooksData[id-1].comments);
    BooksData &&
      BooksData[id - 1].comments.unshift({
        userName: localStorage.getItem("username"),
        commentText: comment,
      });
    let comments = BooksData[id - 1].comments;
    setBooks([
      {
        userName: localStorage.getItem("username"),
        commentText: comment,
      },
      ...comments,
    ]);
  };

  return (
    <div className="book-card">
      <div className="book-card-image">
        <img src={`${booksState && booksState.img}`} />
        <div className="book-card-info">
          <span className="title">Genel Bilgiler</span>
          <span>Kitap Adı : {booksState && booksState.bookName} </span>
          <span>Yazar Adı : {booksState && booksState.authorName} </span>
          <span>İlk Baskı Yılı : {booksState && booksState.printYear} </span>
          <span>Sayfa Sayısı : {booksState && booksState.numberOfPages} </span>
        </div>
      </div>
      <div className="book-card-text">
        <span className="title">Konusu</span>
        <p> {booksState && booksState.description} </p>
      </div>
      <div className="comment-box">
        <div className="comments">
          <h2>Yorumlar</h2>
          {BooksData &&
            BooksData[id - 1].comments.map((comment, index) => (
              <div key={index}>
                <span>{comment.userName}</span>
                <p>{comment.commentText}</p>
              </div>
            ))}
        </div>
        {isLoggedIn ? (
          <div className="comment-form">
            <form onSubmit={addComment}>
              <textarea
                placeholder="Yorum Yap"
                name="comment"
                id="comment"
                cols="50"
                rows="10"
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button type="submit">Yorum Yap</button>
            </form>
          </div>
        ) : (
          <div className="comment-form">
            <form>
              <textarea
                placeholder="Yorum Yap"
                name="comment"
                id="comment"
                cols="50"
                rows="10"
                disabled
              ></textarea>
              <button type="submit" disabled>
                Yorum Yap
              </button>
              <span>Yorum yapabilmek için giriş yapmalısın !!!</span>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookDetail;
