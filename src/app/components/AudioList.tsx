"use client"

import React from 'react';
import { List, ListItemText, Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';

// Custom styled component for list items
const CustomListItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

// Container for list item content with 85% width
const ListItemContent = styled(Box)(({ theme }) => ({
  flex: '0 0 85%',
  display: 'flex',
  alignItems: 'center',
}));

// Edit button container with the remaining width
const EditButtonContainer = styled(Box)(({ theme }) => ({
  flex: '0 0 15%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end', // Align button to the right
}));

interface AudioFile {
  title: string;
  src: string;
  duration: number;
}

interface AudioListProps {
  audioFiles: AudioFile[];
  onSelect: (src: string) => void;
  currentAudio: string;
  onEdit: (file: AudioFile) => void;  // Callback for edit button
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

const AudioList: React.FC<AudioListProps> = ({ audioFiles, onSelect, currentAudio, onEdit }) => {
  return (
    <List>
      {audioFiles.map((file, index) => (
        <CustomListItem
          key={index}
          sx={{
            backgroundColor: currentAudio === file.src ? 'primary.main' : 'background.paper',
            color: currentAudio === file.src ? 'green' : 'blue',
          }}
        >
          <ListItemContent onClick={() => onSelect(file.src)}>
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
          </ListItemContent>
          <EditButtonContainer>
            <IconButton onClick={() => onEdit(file)}>
              <EditIcon />
            </IconButton>
          </EditButtonContainer>
        </CustomListItem>
      ))}
    </List>
  );
};

export default AudioList;
