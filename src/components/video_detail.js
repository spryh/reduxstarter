import React from 'react'
import { ResponsiveEmbed, Col, Button } from 'react-bootstrap'

const VideoDetail = ({ vli_video }) => {
  // given this is the first time we are hitting API, put a spinner...
  if (!vli_video) {
    return <div>loading...</div>
  }

  const url = `https://www.youtube.com/embed/${vli_video.id.videoId}`

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div> {vli_video.snippet.title}</div>
        <div>
          {' '}
          <Button classname="btn btn-danger">Buy</Button>
        </div>
        <div> {vli_video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail
