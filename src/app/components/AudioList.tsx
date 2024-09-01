"use client";

import React from 'react';
import { List, ListItemText, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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
    <List sx={{marginBottom:'100px'}}>
      <div className="list-item-content" style={{ borderBottom: '0.01px solid white', paddingBottom: '10px', marginBottom: '10px' }}>
        <ListItemText
          primary={
            <Typography style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Typography style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
                <Typography> # </Typography>
                <Typography style={{ marginLeft: '20px' }}>Title</Typography>
              </Typography>
              <Typography variant="body2" style={{ marginRight: '6%' }}>
                <AccessTimeIcon />
              </Typography>
            </Typography>
          }
        />
      </div>
      {audioFiles.map((file, index) => (
        <div
          key={index}
          className={`custom-list-item ${currentAudio === file.src ? 'selected-item' : ''}`}
          onClick={() => onSelect(file.src)}
        >
          <div className="list-item-content">
            <ListItemText
              primary={
                <Typography style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Typography style={{ display: 'flex', flexDirection: 'row' }}>
                    {index + 1} . {" "}
                    <Typography style={{ marginLeft: '10px' }}>
                      {file.title}
                    </Typography>
                  </Typography>
                  <Typography variant="body2">
                    {formatDuration(file.duration)}
                  </Typography>
                </Typography>
              }
            />
          </div>
          <div className="edit-button-container">
            <IconButton onClick={() => onEdit(file)}>
              <EditIcon className="edit-icon" />
            </IconButton>
          </div>
        </div>
      ))}
    </List>
  );
};

export default AudioList;
