import * as React from 'react'

const ListBooks = ({ books, setBook }) => {
    const [filterName, setFilterName] = React.useState('')

    React.useEffect(() => {
        const form = document.querySelector('form')
        const input = form.querySelector('input')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            console.log(input.value)
            setFilterName(input.value)
        })

    }, [])

    return (
        <div>
            <form>
                <label>
                    book name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>

            {filterName === '' ?
                books.map((book) => <p
                    onClick={() => setBook(book.catalogNumber)}
                    key={book.catalogNumber.toString()}
                >
                    {book.bookName}
                </p>)
                :
                books.filter((book) => book.bookName.toLowerCase().includes(filterName.toLowerCase())).map((book) => <p
                    key={book.catalogNumber.toString()}
                    onClick={() => setBook(book.catalogNumber)}
                >
                    {book.bookName}
                </p>)
            }


        </div>
    )
}

export default ListBooks