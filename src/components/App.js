import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BooksPage from "./books/BooksPage";
import ManageBookPage from "./books/ManageBookPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/books" component={BooksPage} />
        <Route path="/book/:slug" component={ManageBookPage} />
        <Route path="/book" component={ManageBookPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
