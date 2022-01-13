import * as React from 'react'

const AddBook = ({ setAddBook, addBook, setBook }) => {

    const action = () => {
        setBook(null)
        setAddBook(!addBook)
    }

    React.useEffect(() => {
    }, [])
    return (
        <div>
            <button onClick={action}>
                add
            </button>
        </div>
    )
}


export default AddBook