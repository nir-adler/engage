import * as React from 'react'
import './App.css'
import { books } from './db/books'
import Book from './components/Book'
import ListBooks from './components/ListBooks'
import AddBook from './components/AddBook'
import AddBookEdit from './components/AddBookEdit'
import { Context } from './context/BooksContext'

function App() {

  const {
    state: { books, bookId, addBook },
    loadBooks,
    setAddBook,
    setBook,
    addBookDb } = React.useContext(Context)

  console.log(addBook)

  React.useEffect(() => {
    loadBooks()
  }, [])

  return (
    <div className="App">
      <AddBook
        setAddBook={setAddBook}
        addBook={addBook}
        setBook={setBook}
      />
      <ListBooks
        books={books}
        setBook={setBook}
      />
      {bookId ? <Book
        bookId={bookId}
        books={books}
      /> : null}
      {addBook ?
        <AddBookEdit
          books={books}
          loadBooks={loadBooks}
          addBookDb={addBookDb}
        />
        : null}
    </div>
  );
}

export default App;
