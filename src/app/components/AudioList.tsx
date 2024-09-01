import React from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';

interface AudioListProps {
  audioFiles: { title: string; src: string }[];
  onSelect: (src: string) => void;
  currentAudio: string;
}

const AudioList: React.FC<AudioListProps> = ({ audioFiles, onSelect, currentAudio }) => {
  return (
    <List>
      {audioFiles.map((file, index) => (
        <ListItem
          key={index}
          button
          onClick={() => onSelect(file.src)}
          sx={{
            backgroundColor: currentAudio === file.src ? 'primary.main' : 'background.paper',
            color: currentAudio === file.src ? '#fff' : 'inherit',
          }}
        >
          <ListItemText primary={file.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default AudioList;
