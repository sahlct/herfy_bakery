import React, { useState, useRef, useEffect } from 'react';
import { IconVolume, IconVolumeOff, IconPlayerPlay, IconPlayerPause, IconPlayerSkipBack, IconPlayerSkipForward } from '@tabler/icons-react';

const VideoPlayer = ({ src, isPlaying, togglePlay, isMuted, toggleMute }) => {
  const videoRef = useRef(null);

  // Play or pause the video based on the prop
  useEffect(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying]);

  // Set mute state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const skip = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  return (
    <div className="relative w-full pb-[177.78%]"> {/* 9:16 aspect ratio */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={src}
        loop
        muted={isMuted}
        autoPlay
      />
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        <button onClick={togglePlay} className="text-white bg-black bg-opacity-50 p-2 rounded">
          {isPlaying ? <IconPlayerPause stroke={2} /> : <IconPlayerPlay stroke={2} />}
        </button>
        <button onClick={toggleMute} className="text-white bg-black bg-opacity-50 p-2 rounded">
          {isMuted ? <IconVolumeOff stroke={2} /> : <IconVolume stroke={2} />}
        </button>
        <div>
          <button onClick={() => skip(-10)} className="text-white bg-black bg-opacity-50 p-2 rounded mr-2">
            <IconPlayerSkipBack stroke={2} />
          </button>
          <button onClick={() => skip(10)} className="text-white bg-black bg-opacity-50 p-2 rounded">
            <IconPlayerSkipForward stroke={2} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function MediaData() {
  const [videos] = useState([
    '/assets/video2.mp4',
    '/assets/video3.mp4',
    '/assets/video4.mp4'
  ]);

  // Initialize all videos as playing and muted
  const [playingStates, setPlayingStates] = useState(Array(videos.length).fill(true)); // Start with all videos playing
  const [mutedStates, setMutedStates] = useState(Array(videos.length).fill(true)); // Start with all videos muted

  const toggleMute = (index) => {
    setMutedStates(prev => {
      const newMutedStates = [...prev];
      newMutedStates[index] = !newMutedStates[index]; // Toggle mute for clicked video
      return newMutedStates;
    });
  };

  const togglePlay = (index) => {
    setPlayingStates(prev => {
      const newPlayingStates = [...prev];
      newPlayingStates[index] = !newPlayingStates[index]; // Toggle play for clicked video
      return newPlayingStates;
    });
  };

  return (
    <div className="container mx-auto px-4 mb-16">
      <h1 className="font-bold font-josefin pb-10" style={{ fontSize: 'clamp(25px, 3vw, 40px)' }}>Media</h1>
      <div className="videoContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <VideoPlayer 
            key={index} 
            src={video} 
            isPlaying={playingStates[index]} // Pass individual play state
            togglePlay={() => togglePlay(index)} // Pass toggle function for individual video
            isMuted={mutedStates[index]} // Pass individual mute state
            toggleMute={() => toggleMute(index)} // Pass toggle function for individual video
          />
        ))}
      </div>
    </div>
  );
}
