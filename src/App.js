import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from "./book/BookList";
import BookSearch from "./book/BookSearch";
import {Route} from "react-router-dom";

class BooksApp extends React.Component {
    render() {
        return (
            <>
                <Route path="/" exact={true} component={BookList} />
                <Route path="/search" component={BookSearch} />
            </>
        )
    }
}

export default BooksApp;
