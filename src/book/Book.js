import React from "react";
import {update} from "../BooksAPI";

class Book extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    updateBookShelf = (event) => {
        this.setState({loading: true});
        const moveToShelf = event.target.value;
        update(this.props.book, moveToShelf)
            .then(() => {
                this.setState({loading: false});
                this.props.onBookMoved(this.props.book, moveToShelf);
            });
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    {this.props.book.imageLinks ? (
                        <div className={"book-cover " + (this.state.loading ? 'loading' : '')} style={{ width: 128, height: 193, backgroundImage: 'url(" ' + this.props.book.imageLinks.thumbnail + ' ")' }}></div>
                    ) : (
                        <div className={"book-cover " + (this.state.loading ? 'loading' : '')} style={{ width: 128, height: 193, background: "lightgray" }}></div>
                    )}
                    <div className="book-shelf-changer">
                        <select onChange={this.updateBookShelf} value={this.props.book.shelf ? this.props.book.shelf : 'none'}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors && this.props.book.authors.join(', ')}</div>
            </div>
        )
    }
}

export default Book;