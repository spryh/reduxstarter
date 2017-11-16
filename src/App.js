import React, { Component } from 'react'
import './App.css'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'
import VideoDetail from './components/video_detail'
import _ from 'lodash'

const API_KEY = 'AIzaSyBwnNqbRoNVMBvT6_8VY4pJ7pYzwAh6QAk'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      app_videos: [], // local app videos
      selected_video: null
    }

    this.videoSearch('surf')
  }

  videoSearch(search_term) {
    YTSearch(
      {
        key: API_KEY,
        term: search_term
      },
      yt_videos => {
        this.setState({
          app_videos: yt_videos,
          selected_video: yt_videos[0]
        })
      }
    )
  }

  render() {
    // throttle the videoSearch function to once ever 300ms using Lodash Debounce
    const videoSearch = _.debounce(search_term => {
      this.videoSearch(search_term)
    }, 300)

    return (
      <div>
        <SearchBar onSearchChange={videoSearch} />
        <VideoDetail vli_video={this.state.selected_video} />
        <VideoList
          vl_videos={this.state.app_videos}
          onVideoSelect={selected_video => this.setState({ selected_video })}
        />
      </div>
    )
  }
}
export default App
