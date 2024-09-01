import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface AudioGridProps {
  audioFiles: { title: string; src: string; image: string }[];
  onSelect: (src: string) => void;
  currentAudio: string;
}

const AudioGrid: React.FC<AudioGridProps> = ({ audioFiles, onSelect, currentAudio }) => {
  return (
    <Grid container spacing={2}>
      {audioFiles.map((file, index) => (
        <Grid
          item
          xs={4} 
          sm={4} 
          md={4} 
          lg={2} 
          xl={2} 
          key={index}
        >
          <Card 
            onClick={() => onSelect(file.src)} 
            sx={{ cursor: 'pointer', position: 'relative' , background:'none' ,boxShadow: currentAudio === file.src ? '2px 6px 6px rgb(84, 228, 127 , 0.3)' : 'none', }}
          >
            <CardMedia
              component="img"
              image={file.image}
              alt={file.title}
              sx={{
                
                filter: currentAudio === file.src ? 'brightness(0.7)' : 'none',
                transition: 'filter 0.3s ease',
                '&:hover': {
                  filter: 'brightness(0.7)',
                },
                borderRadius:3
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                '&:hover': {
                  opacity: 1,
                },
              }}
            >
              <PlayArrowIcon sx={{ fontSize: 50, color: 'white' }} />
            </Box>
            <CardContent>
              <Typography
                variant="subtitle1"
                sx={{
                  color: currentAudio === file.src ? 'rgb(84, 228, 127)' : 'white',
                  fontWeight: currentAudio === file.src ? 'bold' : 'normal',
                  textAlign:'left'
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
