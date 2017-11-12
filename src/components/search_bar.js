import React, { Component } from 'react' //import React, pull React.Component as named variable

class SearchBar extends Component {
   constructor(props) {
      super(props)
      this.state = { term: '' }
   }

   onInputChange(search_term) {
      this.setState({ search_term })
      this.props.onSearchChange(search_term)
   }

   render() {
      return (
         <div className="search-bar">
            <input
               value={this.state.search_term} //defines the search term variable
               onChange={event => this.onInputChange(event.target.value)}
            />
         </div>
      )
   }
}

export default SearchBar
