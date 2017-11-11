import React from 'react';

const VideoListItem = ({vli_video}) => {
    //we could have defined const VideoListItem = ({props}) and then const vli_video = props.vli_video;
    //console.log(vli_video);

    const imageURL = vli_video.snippet.thumbnails.default.url;

    return(
        <li >
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageURL}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{vli_video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem