import React, { Component } from 'react'; //Libraries dont need paths
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search_bar';


// Let's comment out the boilerplate from CRA for now...
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get finished, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/



const API_KEY = 'AIzaSyBwnNqbRoNVMBvT6_8VY4pJ7pYzwAh6QAk';


// const App = function(){
// We can arrow the function in ES6
const App = () => {
    //parenthesis for multi line returns
    return (
        <div>
            <SearchBar />
        </div>
    );
}
export default App;
