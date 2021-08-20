import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AuthorsData from "../../AuthorsData";

function AuthorDetail() {
  let isLoggedIn = localStorage.getItem("username");

  const [authorState, setAuthorState] = useState();
  const [comment, setComment] = useState();
  const [authors, setAuthors] = useState(AuthorsData);

  let { id } = useParams();

  useEffect(() => {
    setAuthorState(AuthorsData.find((author) => author.id == id));
  }, []);

  const addComment = (e) => {
    e.preventDefault();
    // console.log(BooksData[id-1].comments);
    AuthorsData &&
      AuthorsData[id - 1].comments.unshift({
        userName: localStorage.getItem("username"),
        commentText: comment,
      });
    let comments = AuthorsData[id - 1].comments;
    setAuthors([
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
        <img src={`${authorState && authorState.img}`} />
        <div className="book-card-info">
          <span className="title">Genel Bilgiler</span>
          <span>Yazar Adı : {authorState && authorState.authorName}</span>
          <span>Doğum Tarihi : {authorState && authorState.dateOfBirth} </span>
          <span>Ölüm Tarihi : {authorState && authorState.dateOfDeath} </span>
          <span>Uyruk : {authorState && authorState.country} </span>
        </div>
      </div>
      <div className="book-card-text">
        <span className="title">Konusu</span>
        <p>{authorState && authorState.description}</p>
      </div>
      <div className="comment-box">
        <div className="comments">
          <h2>Yorumlar</h2>
          {AuthorsData &&
            AuthorsData[id - 1].comments.map((comment, index) => (
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

export default AuthorDetail;
