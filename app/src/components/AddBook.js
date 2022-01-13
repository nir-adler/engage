import * as React from 'react'

const AddBook = ({ setAddBook, addBook }) => {

    const action = () => {
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