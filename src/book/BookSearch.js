import React from 'react';
import {Link} from "react-router-dom";
import {search} from "../BooksAPI";
import Book from "./Book";

class BookSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchResults: []
        }
    }

    componentDidMount() {
        search('Android')
            .then(res => this.setState({searchResults: res}));
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input onChange={this.doSearch} type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchResults && this.state.searchResults.map((book) => {
                            return (
                                <li key={book.id}>
                                    <Book onBookMoved={this.props.onBookMoved} book={book} />
                                </li>
                            )
                        })
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookSearch;