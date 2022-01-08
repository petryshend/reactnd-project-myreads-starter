import React, {useState} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from "./book/BookList";
import BookSearch from "./book/BookSearch";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
        <>
          {this.state.showSearchPage ? <BookSearch /> : <BookList onShowSearchPage={() => this.setState({showSearchPage: true})} />}
        </>
    )
  }
}

export default BooksApp
