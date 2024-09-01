"use client"

import React from 'react';
import { Button } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';

interface ToggleViewButtonProps {
  onToggle: () => void;
  isGridView: boolean;
}

const ToggleViewButton: React.FC<ToggleViewButtonProps> = ({ onToggle, isGridView }) => {
  return (
    <Button  className='toggle' onClick={onToggle} sx={{ mb: 2 ,color:'whire' , textAlign:'right'}}>
      {isGridView ? 
      <ListIcon  sx={{color:'whire'}}/>
      : 
      <ViewCompactIcon sx={{color:'whire'}}/>
      }
    </Button>
  );
};

export default ToggleViewButton;
