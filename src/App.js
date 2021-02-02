import BookForm from "./BookForm";
import Library from "./Library";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const LOCAL_STORAGE_KEY = "LIBRARY.BOOK.STORAGE";

export default function App() {
  const [books, setBooks] = useState([]);
  const [showingBookForm, setShowingBookForm] = useState(false);

  useEffect(() => {
    // Retrieve from local storage
    const storedBooks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedBooks) setBooks(storedBooks);
  }, []);

  useEffect(() => {
    // Save to local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  function addBook(title, author, isFeatured = false, isComplete) {
    setBooks((previousBooks) => {
      return [
        ...books,
        {
          id: uuid(),
          title: title,
          author: author,
          isFeatured: isFeatured,
          isComplete: isComplete,
        },
      ];
    });
  }

  function removeBook(bookId) {
    setBooks(books.filter((book) => book.id !== bookId));
  }

  function toggleBookForm() {
    setShowingBookForm(!showingBookForm);
  }

  function toggleReadStatus(bookId) {
    const newBooks = [...books];
    const book = books.find((book) => book.id === bookId);
    book.isComplete = !book.isComplete;
    setBooks(newBooks);
  }

  return (
    <>
      <header className="header-container">
        <h1 className="library-title">Yuri's Library</h1>
        <button className={showingBookForm ? "button-error" : "button-success"} onClick={toggleBookForm}>
          {showingBookForm ? "Close Form" : "Add Book"}
        </button>
      </header>

      {showingBookForm && <BookForm onAddBook={addBook} />}

      <Library
        books={books}
        onRemoveBook={removeBook}
        onToggleReadStatus={toggleReadStatus}
      />
    </>
  );
}
