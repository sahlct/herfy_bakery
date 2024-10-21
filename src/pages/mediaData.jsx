import React, { useState, useRef, useEffect } from 'react';
import { IconVolume, IconVolumeOff, IconPlayerPlay, IconPlayerPause, IconPlayerSkipBack, IconPlayerSkipForward } from '@tabler/icons-react';

const VideoPlayer = ({ src, isGlobalPlaying, setGlobalPlaying, globalMuted, setGlobalMuted, isMuted, toggleMute }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isGlobalPlaying && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(isGlobalPlaying);
  }, [isGlobalPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = () => {
    setGlobalPlaying(!isGlobalPlaying);
  };

  const skip = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const handleEnded = () => setIsPlaying(false);
    
    if (video) {
      video.addEventListener('ended', handleEnded);
    }
    
    return () => {
      if (video) {
        video.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

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
  const [isGlobalPlaying, setGlobalPlaying] = useState(true);
  const [globalMutedIndex, setGlobalMutedIndex] = useState(null);
  const videos = [
    '/assets/video2.mp4',
    '/assets/video3.mp4',
    '/assets/video4.mp4'
  ];

  const toggleMute = (index) => {
    setGlobalMutedIndex((prevIndex) => (prevIndex === index ? null : index)); // Unmute clicked video, mute others
  };

  return (
    <div className="container mx-auto px-4 mb-16">
      <h1 className="font-bold font-josefin pb-10" style={{ fontSize: 'clamp(25px, 3vw, 40px)' }}>Media</h1>
      <div className="videoContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <VideoPlayer 
            key={index} 
            src={video} 
            isGlobalPlaying={isGlobalPlaying}
            setGlobalPlaying={setGlobalPlaying}
            isMuted={globalMutedIndex !== index} // Only unmute the clicked video
            toggleMute={() => toggleMute(index)}
          />
        ))}
      </div>
    </div>
  );
}
