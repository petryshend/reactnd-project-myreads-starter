import React from "react";
import BookShelf from "./BookShelf";
import {Link} from "react-router-dom";
import {shelves} from "../App";

class BookList extends React.Component {

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {Object.keys(shelves).map((key) => {
                            return <BookShelf key={key} title={shelves[key]} books={this.props.books[key]} onBookMoved={this.props.onBookMoved} />
                        })}
                    </div>
                </div>
                <Link to="/search">
                    <div className="open-search">
                        <button>Add a book</button>
                    </div>
                </Link>
            </div>
        )
    }
}

export default BookList;