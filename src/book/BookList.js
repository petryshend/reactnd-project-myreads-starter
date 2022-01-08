import React from "react";
import BookShelf from "./BookShelf";
import {getAll} from "../BooksAPI";

class BookList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        getAll().then(res => {
            this.setState({books: res});
        });
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf books={this.state.books.filter(book => {
                            return book.shelf === 'currentlyReading';
                        })} />
                        <BookShelf books={this.state.books.filter(book => {
                            return book.shelf === 'wantToRead';
                        })} />
                        <BookShelf books={this.state.books.filter(book => {
                            return book.shelf === 'read';
                        })} />
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