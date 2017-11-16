import React, { Component } from 'react'
import './App.css'
//import _ from 'lodash'


import BookList from './containers/book_list'


class App extends Component {

  render() {

    return (
      <div>
        <BookList/>
      </div>
    )
  }
}
export default App
