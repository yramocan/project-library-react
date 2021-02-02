import { useState } from "react";

export default function BookForm({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  function clearForm() {
    setTitle("");
    setAuthor("");
    setIsFeatured(false);
    setIsComplete(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddBook(title, author, isFeatured, isComplete);
    clearForm();
  }

  return (
    <div className="book-form-container">
      <h2>Book Form</h2>

      <form action="submit" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            name="author"
            placeholder="Enter Author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="featured"
              checked={isFeatured}
              onChange={(e) => {
                setIsFeatured(e.target.checked);
              }}
            />
            Is this a featured book?
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="completed"
              checked={isComplete}
              onChange={(e) => {
                setIsComplete(e.target.checked);
              }}
            />
            Did you read this yet?
          </label>
        </div>

        <button type="submit" className="button-success">
          Add Book
        </button>
      </form>
    </div>
  );
}
