import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const BookForm = ({ book, onSave, onChange, saving = false, errors = {} }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{book.id ? "Edit" : "Add"} Book</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={book.title}
        onChange={onChange}
        error={errors.title}
      />

      <TextInput
        name="author"
        label="Author"
        value={book.author}
        onChange={onChange}
        error={errors.author}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

BookForm.propTypes = {
  book: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default BookForm;
