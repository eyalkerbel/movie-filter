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
    <div className="card" style={{ width: '345px', maxWidth: '100%' , backgroundColor: 'lightyellow' }}>
      <img
        src={video.image_url}
        alt={video.title}
        style={{ width: '100%', height: '140px', objectFit: 'cover' }}
        loading="lazy"
      />
      <div className="card-content" style={{ textAlign: 'center' }}>
        <p className="card-text" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
          {video.artist}
        </p>
        <p className="card-text" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
          {video.release_year}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
