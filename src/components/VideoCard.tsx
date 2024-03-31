import React from 'react';
import { Video } from '../types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface VideoCardProps {
  video: Video;
}


const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Card sx={{ width: 345, maxWidth: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={video.image_url}
        alt={video.title}
        loading="lazy"
      />
      <CardContent sx={{ textAlign: 'center', backgroundColor: 'lightyellow' }}>
        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center' }}>
          {video.artist}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center' }}>
          {video.release_year}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
