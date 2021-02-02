import React from "react";

export default function Book({
  book,
  className,
  onRemoveBook,
  onToggleReadStatus,
}) {
  return (
    <div className={["book-container", className].join(" ")}>
      <h3 className="book-title">{book.title}</h3>
      <p>
        <b>Author</b>: {book.author}
      </p>
      <p>{book.isComplete ? "Read" : "Unread"}</p>

      <BookButtonOptions
        book={book}
        onRemoveBook={onRemoveBook}
        onToggleReadStatus={onToggleReadStatus}
      />
    </div>
  );
}

function BookButtonOptions({ book, onRemoveBook, onToggleReadStatus }) {
  function handleRemoveBook() {
    onRemoveBook(book.id);
  }

  function handleToggleReadStatus() {
    onToggleReadStatus(book.id);
  }

  return (
    <div className="button-options">
      <button
        className={book.isComplete ? "button-secondary" : "button-primary"}
        onClick={handleToggleReadStatus}
      >
        {book.isComplete ? "Mark as Unread" : "Mark as Read"}
      </button>

      <button className="button-error" onClick={handleRemoveBook}>
        Delete
      </button>
    </div>
  );
}
