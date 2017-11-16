import {combineReducers} from 'redux' // npm redux
import BooksReducer from './reducer_books'

// combine the state objects as follows
const rootReducer = combineReducers ({
   books: BooksReducer
})

export default rootReducer