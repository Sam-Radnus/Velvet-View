import React from 'react';

function VideoPlayer({ videoSrc }) {
    return (
        <div style={{marginTop:"13.4vh",marginLeft:'27vw'}}>
      <h3 style={{marginLeft:'0vw',color:'rgb(255,0,77)'}}>Now Playing</h3>
      <div style={{ height: '41vh', width: '69.8vw', borderRadius:'10px'}}>

        <div style={{ backgroundColor: 'rgba(0,0,0,0)' }} className="card-body">
        <video
      
           width="100%"
           height="311px"
          
           autoplay
           loop
           muted={true}
        >
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"  type="video/mp4" />
</video>
       
        </div>
       
      </div>
    </div>
    );
}

export default VideoPlayer;
