import React from 'react';
import { Button } from '@mui/material';

interface ToggleViewButtonProps {
  onToggle: () => void;
  isGridView: boolean;
}

const ToggleViewButton: React.FC<ToggleViewButtonProps> = ({ onToggle, isGridView }) => {
  return (
    <Button variant="contained" onClick={onToggle} sx={{ mb: 2 }}>
      {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
    </Button>
  );
};

export default ToggleViewButton;
