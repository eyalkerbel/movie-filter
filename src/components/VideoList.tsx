import React from 'react';
import VideoCard from './VideoCard';
import {useVideoContext} from "./context/Video";
import {Grid} from "@mui/material";


const VideoList: React.FC = () => {
  const { filteredVideos } = useVideoContext();

  return (
    <Grid container spacing={2} justifyContent="center" style={{marginTop: '1rem'}}>
      {filteredVideos.map((video) => (
        <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center" key={video.id}>
          <VideoCard video={video} />
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoList;
