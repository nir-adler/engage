import * as React from 'react'

const AddBook = ({ addBookDb }) => {
    const [title, setTitle] = React.useState('Enter Title')

    const submit = (e) => {
        console.log('submit')
        e.preventDefault()
        addBookDb(title)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="submit" value="add" />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </form>
        </div>
    )
}


export default AddBook