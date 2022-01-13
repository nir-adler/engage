import * as React from 'react'
import './App.css'
import Book from './components/Book'
import ListBooks from './components/ListBooks'
import AddBook from './components/AddBook'
import { Context } from './context/BooksContext'

function App() {

  const {
    state: { books, bookName },
    loadBooks,
    setBookName,
    addBookDb,
    deleteBook,
    updateBook } = React.useContext(Context)

  React.useEffect(() => {
    loadBooks()
  }, [])

  return (
    <div className="App">
      <AddBook
        addBookDb={addBookDb}
      />
      <ListBooks
        books={books}
        setBookName={setBookName}
        deleteBook={deleteBook}

      />
      {bookName ? <Book
        bookName={bookName}
        books={books}
        updateBook={updateBook}
      /> : null}

    </div>
  );
}

export default App;
