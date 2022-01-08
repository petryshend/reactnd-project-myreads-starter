import React from "react";
import BookShelf from "./BookShelf";

class BookList extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf />
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