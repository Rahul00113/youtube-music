"use client";

import { useEffect, useState } from 'react';
import AudioPlayer from '@/app/components/AudioPlayer';
import AudioList from '@/app/components/AudioList';
import AudioGrid from '@/app/components/AudioGrid';
import ToggleViewButton from '@/app/components/ToggleViewButton';
import { Container, Box, Modal, Typography, IconButton, Button, Stack, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const audioFiles = [
  { title: 'God Damn', src: '/audio/god_damn.mp3', image: '/images/god_damn.jpg' , duration: 233.534694},
  { title: 'Tauba Tauba', src: '/audio/Tauba.mp3', image: '/images/Tauba.jpg' , duration: 228.675918 }
];
const Home = () => {
  const storedFiles = JSON.parse(localStorage.getItem('audioFiles') || '[]');
  const [isGridView, setIsGridView] = useState(false);
  const [currentAudio, setCurrentAudio] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState(audioFiles);
  console.log('........storedFiles......', storedFiles)
  useEffect(() => {
    if (storedFiles?.length == 0) {
      localStorage.setItem('audioFiles', JSON.stringify(audioFiles));
    }
    setUploadedFiles(storedFiles)
  }, [JSON.stringify(storedFiles)])


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

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const file = files[0];
      try {
        const audio = new Audio(URL.createObjectURL(file));
        audio.onloadedmetadata = () => {
          const duration = audio.duration;  // Duration in seconds

          const newFile = {
            title: file.name,
            src: URL.createObjectURL(file),
            image: '/images/Tauba.jpg',  // Default image for uploaded files
            duration: duration,  // Add duration to the file object
          };
          // Save to localStorage
          localStorage.setItem('audioFiles', JSON.stringify([...storedFiles, newFile]));
          console.log('.......file......', file)
          setUploadedFiles(prevFiles => [...prevFiles, newFile]);
          handleCloseModal();
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
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
          <AudioGrid audioFiles={uploadedFiles} onSelect={handleAudioSelect} currentAudio={currentAudio} />
        ) : (
          <AudioList audioFiles={uploadedFiles} onSelect={handleAudioSelect} currentAudio={currentAudio} />
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
