"use client"

import { useState } from 'react';
import AudioPlayer from '@/app/components/AudioPlayer';
import AudioList from '@/app/components/AudioList';
import AudioGrid from '@/app/components/AudioGrid';
import ToggleViewButton from '@/app/components/ToggleViewButton';
import { Container, Box, Modal, Typography, IconButton, Button, Stack, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [currentAudio, setCurrentAudio] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const audioFiles = [
    { title: 'God Damn', src: '/audio/god_damn.mp3', image: '/images/god_damn.jpg' },
    { title: 'Tauba Tauba', src: '/audio/Tauba.mp3', image: '/images/Tauba.jpg' },
    { title: 'Like A Snake', src: '/audio/god_damn.mp3', image: '/images/god_damn.jpg' },
    { title: 'Bajre Da', src: '/audio/god_damn.mp3', image: '/images/god_damn.jpg' },
    { title: 'Hola At Your Boy', src: '/audio/god_damn.mp3', image: '/images/god_damn.jpg' },
    { title: 'Surma', src: '/audio/god_damn.mp3', image: '/images/god_damn.jpg' },
    { title: 'Red And Blue', src: '/audio/god_damn.mp3', image: '/images/god_damn.jpg' }
  ];

  const handleToggleView = () => setIsGridView(!isGridView);

  const handleAudioSelect = (src: string) => setCurrentAudio(src);

  const handleAudioEnd = () => {
    handleNextAudio();
  };

  const handleNextAudio = () => {
    const currentIndex = audioFiles.findIndex(file => file.src === currentAudio);
    const nextIndex = (currentIndex + 1) % audioFiles.length;
    setCurrentAudio(audioFiles[nextIndex].src);
  };

  const handlePreviousAudio = () => {
    const currentIndex = audioFiles.findIndex(file => file.src === currentAudio);
    const previousIndex = (currentIndex - 1 + audioFiles.length) % audioFiles.length;
    setCurrentAudio(audioFiles[previousIndex].src);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files).map(file => ({
        title: file.name,
        src: URL.createObjectURL(file),
        image: '/images/default_audio_image.jpg',  // Default image for uploaded files
      }));
      setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);
      handleCloseModal();
    }
  };

  return (
    <Container>
      <Box sx={{ textAlign: 'center', paddingTop: 4 }}>
        {/* Plus Icon Button to Open Modal */}
        <Box sx={{ textAlign: 'right' }}>
          <IconButton color="primary" onClick={handleOpenModal}>
            <AddIcon />
          </IconButton>
        </Box>
        {/* Toggle View Button */}
        <ToggleViewButton onToggle={handleToggleView} isGridView={isGridView} />
        {/* Audio List or Grid */}
        {isGridView ? (
          <AudioGrid audioFiles={audioFiles} onSelect={handleAudioSelect} currentAudio={currentAudio} />
        ) : (
          <AudioList audioFiles={audioFiles} onSelect={handleAudioSelect} currentAudio={currentAudio} />
        )}
        {/* Audio Player */}
        {currentAudio && (
          <AudioPlayer
            audioSrc={currentAudio}
            onEnded={handleAudioEnd}
            onNext={handleNextAudio}
            onPrevious={handlePreviousAudio}
          />
        )}
      </Box>
      {/* Modal for Uploading Audio Files */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          bgcolor: 'background.paper', 
          boxShadow: 24, 
          p: 4, 
          width: 400 
        }}>
          <Typography variant="h6" component="h2">
            Upload Audio File
          </Typography>
          <Stack spacing={2} mt={2}>
            <TextField
              type="file"
              inputProps={{ accept: 'audio/*' }}
              onChange={handleFileChange}
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleCloseModal}>
              Close
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Container>
  );
};

export default Home;
