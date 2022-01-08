import React from "react";
import BookShelf from "./BookShelf";
import {getAll} from "../BooksAPI";

const shelves = {
    currentlyReading: 'Currently reading',
    wantToRead: 'Want to read',
    read: 'Read'
};

class BookList extends React.Component {
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
            state.books[book.shelf] = state.books[book.shelf].filter((oldBook) => {
                return oldBook.id !== book.id;
            });
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
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {Object.keys(shelves).map((key) => {
                            return <BookShelf key={key} title={shelves[key]} books={this.state.books[key]} onBookMoved={this.moveBookToShelf} />
                        })}
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={this.props.onShowSearchPage}>Add a book</button>
                </div>
            </div>
        )
    }
}

export default BookList;