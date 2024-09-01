// components/Playlist.tsx

import React from 'react';
import styles from './Playlist.module.css';

interface Track {
  title: string;
  artist: string;
  duration: string;
}

const Playlist: React.FC = () => {
  const tracks: Track[] = [
    { title: 'God Damn', artist: 'Badshah, Karan Aujla, Hiten', duration: '2:47' },
    { title: "O'Saathiya", artist: 'Badshah, DIVINE, Nikhita Gandhi', duration: '3:28' },
    { title: 'Like A Snake', artist: 'Badshah, Rafsher, Aastha Gill', duration: '3:01' },
    { title: 'Bajre Da Sitta', artist: 'Badshah, Seedhe Maut', duration: '3:40' },
    { title: 'Hola At Your Boy', artist: 'Badshah, KR$NA, Pragya', duration: '2:52' },
    { title: 'Surma', artist: 'Badshah', duration: '2:57' },
    { title: 'Red And Blue', artist: 'Badshah', duration: '2:38' },
  ];

  return (
    <div className={styles.playlist}>
      <div className={styles.header}>
        <div className={styles.playButton}>▶️</div>
        <h2 className={styles.title}>Title</h2>
        <h2 className={styles.listIcon}>List</h2>
      </div>
      <div className={styles.tracklist}>
        {tracks.map((track, index) => (
          <div key={index} className={styles.track}>
            <span className={styles.index}>{index + 1}</span>
            <div className={styles.trackInfo}>
              <p className={styles.trackTitle}>{track.title}</p>
              <p className={styles.trackArtist}>{track.artist}</p>
            </div>
            <p className={styles.duration}>{track.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
