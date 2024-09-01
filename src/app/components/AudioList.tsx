import React from 'react';
import { List, ListItemText, Box } from '@mui/material';
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

interface AudioListProps {
  audioFiles: { title: string; src: string }[];
  onSelect: (src: string) => void;
  currentAudio: string;
}

const AudioList: React.FC<AudioListProps> = ({ audioFiles, onSelect, currentAudio }) => {
  return (
    <List>
      {audioFiles.map((file, index) => (
        <CustomListItem
          key={index}
          onClick={() => onSelect(file.src)}
          sx={{
            backgroundColor: currentAudio === file.src ? 'primary.main' : 'background.paper',
            color: currentAudio === file.src ? '#fff' : 'inherit',
          }}
        >
          <ListItemText primary={file.title} />
        </CustomListItem>
      ))}
    </List>
  );
};

export default AudioList;
