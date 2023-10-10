import React, { useState } from 'react';
import './ZoomableImage.css';

const ZoomableImage = ({ src }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel(zoomLevel - 0.1);
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleImageClick = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;

    const image = e.currentTarget;
    const zoomedImageWidth = image.clientWidth * zoomLevel;
    const zoomedImageHeight = image.clientHeight * zoomLevel;

    const maxX = zoomedImageWidth - image.clientWidth;
    const maxY = zoomedImageHeight - image.clientHeight;

    const newX = Math.min(maxX, Math.max(0, offsetX - image.clientWidth / 2));
    const newY = Math.min(maxY, Math.max(0, offsetY - image.clientHeight / 2));

    setPosition({ x: newX, y: newY });
  };

  return (
    <div className='zoomableImage'>
      <div className="zoom-controls">
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={handleResetZoom}>Reset Zoom</button>
      </div>
      <div className="zoomable-image-container">

        <div className="image-wrapper">
          <img
            src={src}
            className="zoomable-image"
            alt=""
            onClick={handleImageClick}
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: `${position.x}px ${position.y}px`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ZoomableImage;
