import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

interface AudioGridProps {
  audioFiles: { title: string; src: string; image: string }[];
  onSelect: (src: string) => void;
  currentAudio: string;
}

const AudioGrid: React.FC<AudioGridProps> = ({ audioFiles, onSelect, currentAudio }) => {
  return (
    <Grid container spacing={2}>
      {audioFiles.map((file, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card onClick={() => onSelect(file.src)} sx={{ cursor: 'pointer' }}>
            <CardMedia component="img" image={file.image} alt={file.title} />
            <CardContent>
              <Typography
                variant="subtitle1"
                sx={{
                  color: currentAudio === file.src ? 'primary.main' : 'text.primary',
                  fontWeight: currentAudio === file.src ? 'bold' : 'normal',
                }}
              >
                {file.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AudioGrid;
