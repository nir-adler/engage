import * as React from 'react'

const AddBookEdit = ({ addBookDb, books,loadBooks }) => {
    const [error, setError] = React.useState('')

    const addBook = () => {
        const bookName = document.querySelector('#add-book-name')
        const authorName = document.querySelector('#add-author-name')
        const catalogNumber = document.querySelector('#add-catalog-number')
        const publicationDate = document.querySelector('#add-publication-date')
        const coverPhoto = document.querySelector('#add-url')
        // console.log(bookName.value)
        // console.log(authorName.value)
        // console.log(catalogNumber.value)
        // console.log(publicationDate.value)
        // console.log(coverPhoto.value)
        console.log('here')
        if (!bookName.value || !authorName.value || !catalogNumber.value || !publicationDate.value || !coverPhoto.value) {
            console.log('here-1')
            setError('add missing fileds')
        } else if (books.find((book) => book.catalogNumber == catalogNumber.value)) {
            console.log('here-2')
            setError('dup ip')
        } else {
            console.log('here-3')
            addBookDb(
                bookName.value,
                authorName.value,
                catalogNumber.value,
                publicationDate.value,
                coverPhoto.value
            )
           
        }
    }

    React.useEffect(() => {


    }, [])
    return (
        <div>
            <form id="add-book-form">
                <label >bookName:</label>
                <input id='add-book-name' type="text" name="name" />
                <p></p>
                <label >authorName:</label>
                <input id='add-author-name' type="text" name="name" />
                <p></p>
                <label >catalogNumber:</label>
                <input id='add-catalog-number' type="text" name="name" />
                <p></p>
                <label >publicationDate:</label>
                <input id='add-publication-date' type="text" name="name" />
                <p></p>
                <label >coverPhoto:</label>
                <input id='add-url' type="text" name="name" />
                <p></p>
            </form>
            <button onClick={addBook}>add book</button>
            {error ? <p>{error}</p> : null}
        </div>
    )
}


export default AddBookEdit