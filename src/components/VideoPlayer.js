import React from 'react';

function VideoPlayer({ videoSrc }) {
    return (
        
        <video style={{zIndex:9999999,borderColor:"white"}} width="320" height="240" muted autoPlay>
            <source src="https://youtu.be/GLiEItdhO5A" type="video/mp4"/>
           Your browser does not support the video tag.
        </video>
    );
}

export default VideoPlayer;
