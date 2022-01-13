import createDataContext from './createDataContext'

const reducer = (state, action) => {
    switch (action.type) {
        case 'update_books':
            return { ...state, books: [...action.payload] }
        case 'set_book':
            return { ...state, bookName: action.payload }
        case 'add_book':
            return {
                ...state, books: state.books.find((book) => book.bookName == action.payload.bookName) ?
                    [...state.books] : [...state.books, { ...action.payload }]
            }
        case 'update_book':
            return {
                ...state, books: state.books.map((book) => {
                    if (book.bookName == action.payload.bookName) {
                        return { ...action.payload.bookinfo, bookName: action.payload.bookName }
                    } else {
                        return { ...book }
                    }
                })
            }
        case 'delete_book':
            return { ...state, books: state.books.filter((book) => book.catalogNumber !== action.payload) }
        default:
            return state
    }
}

const loadBooks = (dispatch) => () => {
    const books = require('../db/books.json')
    dispatch({ type: 'update_books', payload: books })
}

const setBookName = (dispatch) => (bookName) => {
    dispatch({ type: 'set_book', payload: bookName })
}



const deleteBook = (dispatch) => (bookId) => {
    dispatch({ type: 'delete_book', payload: bookId })
}

const updateBook = (dispatch) => (bookName, bookinfo) => {
    console.log('aa  ', bookName, bookinfo)
    dispatch({ type: 'update_book', payload: { bookName, bookinfo } })
}

const addBookDb = (dispatch) => (bookName) => {
    dispatch({
        type: 'add_book', payload: { bookName, authorName: '', catalogNumber: '', publicationDate: '', coverPhoto: '' }
    })
}


export const { Context, Provider } = createDataContext(
    reducer,
    { loadBooks, setBookName, addBookDb, deleteBook, updateBook },
    { books: [], bookName: null },
)