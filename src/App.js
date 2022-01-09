import React from 'react'
import './App.css'
import BookList from "./book/BookList";
import BookSearch from "./book/BookSearch";
import {Route} from "react-router-dom";
import {getAll} from "./BooksAPI";

export const shelves = {
    currentlyReading: 'Currently reading',
    wantToRead: 'Want to read',
    read: 'Read'
};

class BooksApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: {}
        }
    }

    componentDidMount = () => {
        getAll().then(books => {
            const booksShelf = {};
            for (const book of books) {
                if (booksShelf[book.shelf]) {
                    booksShelf[book.shelf].push(book);
                } else {
                    booksShelf[book.shelf] = [book];
                }
            }
            this.setState({books: booksShelf});
        });
    }

    moveBookToShelf = (book, shelf) => {
        this.setState((state) => {
            if (book.shelf) { // Book was already on shelf, so remove it.
                state.books[book.shelf] = state.books[book.shelf].filter((oldBook) => {
                    return oldBook.id !== book.id;
                });
            }

            if (!(shelf in state.books)) {
                return state;
            }

            const newBook = {
                ...book,
                shelf
            }
            state.books[shelf].push(newBook);
            return state;
        })
    }

    render() {
        return (
            <>
                <Route path="/" exact={true} render={() => {
                    return (
                        <BookList books={this.state.books} onBookMoved={this.moveBookToShelf} />
                    )
                }} />
                <Route path="/search" render={() => {
                    return (
                        <BookSearch books={this.state.books} onBookMoved={this.moveBookToShelf} />
                    )
                }} />
            </>
        )
    }
}

export default BooksApp;
