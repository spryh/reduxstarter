import React from 'react'
import VideoListItem from './video_list_item'
//import {ListGroup} from 'react-bootstrap';

const VideoList = props => {
  const videoItems = props.vl_videos.map(vl_video => {
    return (
      <VideoListItem
        vli_video={vl_video}
        key={vl_video.etag}
        onVideoSelect={props.onVideoSelect}
      />
    )
  })

  return (
    <ul className="col-md-4 list-group">
      {/*{props.vl_videos.length} any props.video print the length*/}
      {videoItems}
    </ul>
  )
}

export default VideoList
