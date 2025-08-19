import React, { useRef } from "react";

const VideoCard = ({ title, category, videoUrl }) => {
  const iframeRef = useRef(null);

  const handleFullScreen = () => {
    const iframe = iframeRef.current;
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  };

  return (
    <div className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition relative group">
      <span className="text-sm text-purple-500 font-semibold px-2 pt-2">{category}</span>
      <h2 className="text-lg font-bold px-2 mt-1">{title}</h2>
      <div className="mt-2 cursor-pointer relative" onClick={handleFullScreen}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="200"
          src={`${videoUrl}?autoplay=0&mute=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="group-hover:opacity-100 transition-opacity duration-300"
        ></iframe>
      </div>
      <p className="text-gray-600 text-sm px-2 mt-2">
        Click the video to enter full screen
      </p>
    </div>
  );
};

export default VideoCard;
