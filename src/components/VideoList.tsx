import React from 'react';
import VideoCard from './VideoCard';
import {useVideoContext} from "./context/Video";
import {Grid, Typography} from "@mui/material";


const VideoList: React.FC = () => {
  const { filteredVideos } = useVideoContext();


  if (filteredVideos.length === 0) {
    return (
      <Typography variant="h6" color="text.secondary" style={{ textAlign: 'center', marginTop: '2rem' }}>
        No videos were found. Try adjusting your filters.
      </Typography>
    );
  }

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
