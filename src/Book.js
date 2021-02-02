import React from 'react'

export default function Book({ book }) {
  return (
    <div className="book-container">
      <h3>{book.title}</h3>
      <p><b>Author</b>: { book.author }</p>
      <p>{ book.isComplete ? "Read" : "Unread" }</p>
    </div>
  )
}
