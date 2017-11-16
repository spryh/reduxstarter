import React, { Component } from 'react'
import { connect } from 'react-redux' //npm install --save redux & react-redux

class BookList extends Component {
   renderList(){
      return this.props.books.map((book)=> {
         return (
            <li key={book.title} className="list-group-item">{book.title}</li>
         )
      })
   }

   render() {
      return (
         <ul className="list-group col-sm-4">
            {this.renderList()}
         </ul>
      )
   }
}

function mapStateToProps(state) {
   //Whatever object that returns from here shows up as props inside of BookList
   return {
      books: state.books
   }
}

// Export the container, connect takes a function and a container
export default connect(mapStateToProps)(BookList)