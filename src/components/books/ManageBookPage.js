import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as bookActions from "../../redux/actions/bookActions";
import PropTypes from "prop-types";
import BookForm from "./BookForm";
import { newBook } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageBookPage({ books, loadBooks, saveBook, history, ...props }) {
  const [book, setBook] = useState({ ...props.book });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (books.length === 0) {
      loadBooks().catch((error) => {
        alert("Loading books failed" + error);
      });
    } else {
      setBook({ ...props.book });
    }
  }, [props.book]);

  function handleChange(event) {
    const { name, value } = event.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  }
  function formIsValid() {
    const { title, author } = book;
    const errors = {};

    if (!title) errors.title = "Title is required";
    if (!author) errors.author = "Author is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveBook(book)
      .then(() => {
        toast.success("Book saved.");
        history.push("/books");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return books.length === 0 ? (
    <Spinner />
  ) : (
    <BookForm
      book={book}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageBookPage.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  loadBooks: PropTypes.func.isRequired,
  saveBook: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export function getBookBySlug(books, slug) {
  return books.find((book) => book.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const book =
    slug && state.books.length > 0 ? getBookBySlug(state.books, slug) : newBook;
  return {
    book,
    books: state.books,
  };
}

const mapDispatchToProps = {
  loadBooks: bookActions.loadBooks,
  saveBook: bookActions.saveBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageBookPage);
