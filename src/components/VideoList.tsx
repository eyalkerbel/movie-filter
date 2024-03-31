import React from 'react';
import VideoCard from './VideoCard';
import {useVideoContext} from "./context/Video";


const VideoList: React.FC = () => {
  const { filteredVideos } = useVideoContext();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' , marginTop: '1rem' }}>
      {filteredVideos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
