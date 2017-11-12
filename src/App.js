import React, { Component } from 'react'; //Libraries dont need paths, CRA imports Component
import './App.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyBwnNqbRoNVMBvT6_8VY4pJ7pYzwAh6QAk';


// const App = function(){
// We can arrow the function in ES6

class App extends Component{
    //parenthesis for multi line returns

    constructor(props){
        super(props);

        this.state = {app_videos:[]}; // local app videos

        YTSearch(
            {key:API_KEY, term:'surfboards'},
            (yt_videos) => {this.setState({app_videos:yt_videos})}
        );
    }

    render () {
        return (
            <div>
                <SearchBar />
                <VideoDetail vli_video={this.state.app_videos[0]}/>
                <VideoList vl_videos = {this.state.app_videos} />
            </div>
        );
    }
}
export default App;



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