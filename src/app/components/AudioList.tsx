import React from 'react';
import { List, ListItemText, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled component
const CustomListItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

interface AudioFile {
  title: string;
  src: string;
  duration: number;  // Duration in seconds
}

interface AudioListProps {
  audioFiles: AudioFile[];
  onSelect: (src: string) => void;
  currentAudio: string;
}

const formatDuration = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const hoursStr = hours > 0 ? `${hours}:` : '';
  const minutesStr = hours > 0 ? String(minutes).padStart(2, '0') : minutes;
  const secondsStr = String(secs).padStart(2, '0');

  return `${hoursStr}${minutesStr}:${secondsStr}`;
};

const AudioList: React.FC<AudioListProps> = ({ audioFiles, onSelect, currentAudio }) => {
  return (
    <List>
      {audioFiles.map((file, index) => (
        <CustomListItem
          key={index}
          onClick={() => onSelect(file.src)}
          sx={{
            backgroundColor: currentAudio === file.src ? 'primary.main' : 'background.paper',
            color: currentAudio === file.src ? 'green' : 'blue',
          }}
        >
          <ListItemText
            primary={
              <Typography>
                {file.title}
                <Typography variant="body2" color="textSecondary">
                  {formatDuration(file.duration)}
                </Typography>
              </Typography>
            }
          />
        </CustomListItem>
      ))}
    </List>
  );
};

export default AudioList;
