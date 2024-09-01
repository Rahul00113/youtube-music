import React, { useRef, useEffect } from 'react';
import { Box, Button, Stack } from '@mui/material';

interface AudioPlayerProps {
  audioSrc: string;
  onEnded: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc, onEnded, onNext, onPrevious }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [audioSrc]);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'background.paper',
        boxShadow: 3,
        zIndex: 1000,
        p: 2,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <Button variant="contained" color="secondary" onClick={onPrevious}>
          Previous
        </Button>
        <audio ref={audioRef} src={audioSrc} onEnded={onEnded} controls style={{ width: '60%' }} />
        <Button variant="contained" color="primary" onClick={onNext}>
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default AudioPlayer;
