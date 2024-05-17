// components/VimeoVideo.tsx
import React from 'react';

interface VimeoVideoProps {
  videoId: string;
}

const VimeoVideo: React.FC<VimeoVideoProps> = ({ videoId }) => {
  return (
    <div className="w-full">
      <div className="videoWrapper">
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?h=fa537fbc8e`}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VimeoVideo;
