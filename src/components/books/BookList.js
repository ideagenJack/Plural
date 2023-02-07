import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BookList = ({ books, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {books.map((book) => {
        return (
          <tr key={book.id}>
            <td>
              <Link to={"/book/" + book.title}>{book.title}</Link>
            </td>

            <td>{book.author}</td>
            <td></td>
            <td>
              <button className="btn btn-outline-danger">Edit</button>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(book)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default BookList;
