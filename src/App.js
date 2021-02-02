import Library from './Library'
import { v4 as uuid } from 'uuid'

export default function App() {
  const books = [
    { id: uuid(), title: "To Kill a Mockingbird", author: "Harper Lee", isComplete: true },
    { id: uuid(), title: "The Lord of the Rings", author: "J.R.R Tolkien", isComplete: false },
    { id: uuid(), title: "Divergent", author: "Veronica Roth", isComplete: true },
    { id: uuid(), title: "To Kill a Mockingbird", author: "Harper Lee", isComplete: true },
    { id: uuid(), title: "The Lord of the Rings", author: "J.R.R Tolkien", isComplete: false },
    { id: uuid(), title: "Divergent", author: "Veronica Roth", isComplete: true },
    { id: uuid(), title: "To Kill a Mockingbird", author: "Harper Lee", isComplete: true },
    { id: uuid(), title: "The Lord of the Rings", author: "J.R.R Tolkien", isComplete: false },
    { id: uuid(), title: "Divergent", author: "Veronica Roth", isComplete: true },
    { id: uuid(), title: "To Kill a Mockingbird", author: "Harper Lee", isComplete: true },
    { id: uuid(), title: "The Lord of the Rings", author: "J.R.R Tolkien", isComplete: false },
    { id: uuid(), title: "Divergent", author: "Veronica Roth", isComplete: true },
    { id: uuid(), title: "To Kill a Mockingbird", author: "Harper Lee", isComplete: true },
    { id: uuid(), title: "The Lord of the Rings", author: "J.R.R Tolkien", isComplete: false },
    { id: uuid(), title: "Divergent", author: "Veronica Roth", isComplete: true },
    { id: uuid(), title: "To Kill a Mockingbird", author: "Harper Lee", isComplete: true },
    { id: uuid(), title: "The Lord of the Rings", author: "J.R.R Tolkien", isComplete: false },
    { id: uuid(), title: "Divergent", author: "Veronica Roth", isComplete: true },
    { id: uuid(), title: "To Kill a Mockingbird", author: "Harper Lee", isComplete: true },
    { id: uuid(), title: "The Lord of the Rings", author: "J.R.R Tolkien", isComplete: false },
    { id: uuid(), title: "Divergent", author: "Veronica Roth", isComplete: true },
    { id: uuid(), title: "To Kill a Mockingbird", author: "Harper Lee", isComplete: true },
    { id: uuid(), title: "The Lord of the Rings", author: "J.R.R Tolkien", isComplete: false },
    { id: uuid(), title: "Divergent", author: "Veronica Roth", isComplete: true },
    { id: uuid(), title: "To Kill a Mockingbird", author: "Harper Lee", isComplete: true },
    { id: uuid(), title: "The Lord of the Rings", author: "J.R.R Tolkien", isComplete: false },
    { id: uuid(), title: "Divergent", author: "Veronica Roth", isComplete: true },
  ]

  return (
    <Library books={books} />
  )
}
