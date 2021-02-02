import React from "react";
import Book from "./Book";

export default function Library({ books, onRemoveBook, onToggleReadStatus }) {
  return (
    <div className="library-container">
      {books.map((book) => {
        return (
          <Book
            key={book.id}
            book={book}
            className={book.isFeatured && "featured-book"}
            onRemoveBook={onRemoveBook}
            onToggleReadStatus={onToggleReadStatus}
          />
        );
      })}
    </div>
  );
}
