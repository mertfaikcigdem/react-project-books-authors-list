import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Books from "./components/books/Books";
import BookDetail from "./components/bookDetail/BookDetail";
import Author from "./components/author/Author";
import AuthorDetail from "./components/authorDetail/AuthorDetail";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={Books} />
          <Route path="/books/:id" exact component={BookDetail} />
          <Route path="/author" exact component={Author} />
          <Route path="/author/:id" exact component={AuthorDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
