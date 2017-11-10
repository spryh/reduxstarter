import React, {Component} from 'react'; //import React, pull React.Component as named variable

/*
const SearchBar = () => {
    return <input/>
};
*/


class SearchBar extends Component {
    // all classes have a constructor object
    // it initializes
    // super calls the inherited class
    // term is a property we created to record state of search term
    constructor(props) {

        super(props);
        this.state = { term: ''};
        //state should only be touched this way inside a constructor

    }
//controlled components have values saved by state
    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value})}
                />
                {/*Value of the Input: {this.state.term}*/}
            </div>
        );
    }

    //return <input onChange=event => console.log(event.target.value)}/>;
     //return <input onChange={event => this.setState({ term: event.target.value})}/>

    /*Event handler .. "on element event" naming convention
    onInputChange(event) {
        //console.log(event.target.value);
        this.setState({ term: event.target.value})
    }*/
}

export default SearchBar;