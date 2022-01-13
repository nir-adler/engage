import createDataContext from './createDataContext'

const reducer = (state, action) => {
    switch (action.type) {
        case 'update_books':
            return { ...state, books: [...action.payload] }
        case 'set_book':
            return { ...state, bookId: action.payload }
        case 'set_add_book':
            return { ...state, addBook: action.payload }
        case 'add_book':
            return { ...state, books: [...state.books, { ...action.payload }] }
        case 'delete_book':
            return { ...state, bookId: null, books: state.books.filter((book) => book.catalogNumber !== action.payload) }
        default:
            return state
    }
}

const loadBooks = (dispatch) => () => {
    try {
        const books = require('../db/books.json')
        console.log(books)
        dispatch({ type: 'update_books', payload: books })
    } catch (e) {

    }
}

const setBook = (dispatch) => (bookId) => {
    try {
        console.log(bookId)
        dispatch({ type: 'set_book', payload: bookId })
    } catch (e) {

    }
}

const setAddBook = (dispatch) => (bool) => {
    try {

        dispatch({ type: 'set_add_book', payload: bool })
    } catch (e) {

    }
}

const deleteBook = (dispatch) => (bookId) => {
    try {

        dispatch({ type: 'delete_book', payload: bookId })
    } catch (e) {

    }
}

const addBookDb = (dispatch) => (
    bookName,
    authorName,
    catalogNumber,
    publicationDate,
    coverPhoto) => {
    try {

        dispatch({
            type: 'add_book', payload: {
                authorName,
                catalogNumber,
                publicationDate,
                coverPhoto,
                bookName
            }
        })
    } catch (e) {

    }
}


export const { Context, Provider } = createDataContext(
    reducer,
    { loadBooks, setBook, setAddBook, addBookDb, deleteBook },
    { books: [], bookId: null, addBook: false },
)