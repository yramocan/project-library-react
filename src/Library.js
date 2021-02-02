import React from 'react'
import Book from './Book'

export default function Library({ books }) {
  return (
    <div className="library-container">
      {
        books.map(book => {
          return <Book key={book.id} book={book} />
        })
      }
    </div>
  )
}
