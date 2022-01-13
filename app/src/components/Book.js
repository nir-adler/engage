import * as React from 'react'

const Book = ({ bookId, books, deleteBook }) => {
    const [book, setBook] = React.useState({})
    React.useEffect(() => {
        const b = books.find((bo) => bo.catalogNumber == bookId)
        if (b) {
            setBook({ ...b })
        }
    }, [bookId])
    return (
        <div>
            {book && book.bookName ? <p>{book.bookName}</p> : null}
            {book && book.authorName ? <p>{book.authorName}</p> : null}
            {book && book.catalogNumber ? <p>{book.catalogNumber}</p> : null}
            {book && book.publicationDate ? <p>{book.publicationDate}</p> : null}
            {book && book.coverPhoto ? <img src={book.coverPhoto} width="500" height="600" /> : null}
            <button onClick={()=>deleteBook(book.catalogNumber)}>delete</button>
        </div>
    )
}


export default Book