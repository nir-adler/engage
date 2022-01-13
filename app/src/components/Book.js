import * as React from 'react'

const Book = ({ bookName, books, updateBook }) => {
    const [book, setBook] = React.useState(null)

    React.useEffect(() => {
        const searchBook = books.find((book) => book.bookName == bookName)
        setBook(searchBook ? { ...searchBook } : null)
    }, [bookName, books])

    const submit = (e) => {
        updateBook(bookName, { ...book })
        e.preventDefault()
    }

    if (!book) {
        return null
    } else {
        return (
            <div>
                <img src={book.coverPhoto} width="300" height="400" />
                <form onSubmit={submit}>
                    <input
                        type="text"
                        value={book.bookName}
                        onChange={(e) => setBook({ ...book, bookName: e.target.value })}
                    />
                    <p></p>
                    <input
                        type="text"
                        value={book.authorName}
                        onChange={(e) => setBook({ ...book, authorName: e.target.value })}
                    />
                    <p></p>
                    <input
                        type="text"
                        value={book.catalogNumber}
                        onChange={(e) => setBook({ ...book, catalogNumber: e.target.value })}
                    />
                    <p></p>
                    <input
                        type="text"
                        value={book.publicationDate}
                        onChange={(e) => setBook({ ...book, publicationDate: e.target.value })}
                    />
                    <p></p>
                    <input
                        type="text"
                        value={book.coverPhoto}
                        onChange={(e) => setBook({ ...book, coverPhoto: e.target.value })}
                    />
                    <p></p>
                    <input type="submit" value="update" />
                </form>
            </div>
        )
    }



}


export default Book