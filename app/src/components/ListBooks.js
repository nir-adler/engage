import * as React from 'react'

const ListBooks = ({ books, setBookName, deleteBook }) => {
    const [filterName, setFilterName] = React.useState('')

    const submit = (e) => {
        setFilterName(e.target.querySelector('input').value)
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={submit}>
                <label>
                    book name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="filter" />
            </form>

            {filterName === '' ?
                books.map((book) => <div
                    key={book.bookName}
                ><p onClick={() => setBookName(book.bookName)}>
                        {book.bookName}
                    </p>
                    <button onClick={() => deleteBook(book.catalogNumber)}>delete</button>
                </div>)
                :
                books.filter((book) => book.bookName.toLowerCase().includes(filterName.toLowerCase())).map((book) => <div
                    key={book.bookName}
                ><p onClick={() => setBookName(book.bookName)}>
                        {book.bookName}
                    </p>
                    <button onClick={() => deleteBook(book.catalogNumber)}>delete</button>
                </div>)
            }
        </div>
    )
}

export default ListBooks