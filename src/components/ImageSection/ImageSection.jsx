import React, { useState } from 'react';
import styles from './ImageSection.module.css'; 
import pic from '../../assets/images/pic.jpg';

const ImageSection  = ({ circles, setCircles, setSelectedCircleId }) => {

  const [draggingId, setDraggingId] = useState(null); 
  const [initialMousePosition, setInitialMousePosition] = useState({ x: 0, y: 0 });
  const [initialCirclePosition, setInitialCirclePosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (id, e) => {
    setDraggingId(id); 
    setSelectedCircleId(id); 

    setInitialMousePosition({ x: e.clientX, y: e.clientY });

    const selectedCircle = circles.find((circle) => circle.id === id);

    setInitialCirclePosition({ x: selectedCircle.x, y: selectedCircle.y });
  };

  const handleMouseMove = (e) => {
    if (draggingId !== null) {
      const container = e.currentTarget.getBoundingClientRect();
      const circleSize = 50; 

      const X = e.clientX - initialMousePosition.x;
      const Y = e.clientY - initialMousePosition.y;

      const newX = Math.max(0, Math.min(initialCirclePosition.x + X, container.width - circleSize));
      const newY = Math.max(0, Math.min(initialCirclePosition.y + Y, container.height - circleSize));

      const updatedCircles = circles.map((circle) =>
        circle.id === draggingId
          ? { ...circle, x: newX, y: newY }
          : circle
      );
      setCircles(updatedCircles); 
    }
  };


  const handleMouseUp = () => {
    setDraggingId(null); 
  };

  return (
    <div
      className={styles['image-section-container']} 
      onMouseMove={handleMouseMove} 
      onMouseUp={handleMouseUp} 
      style={{ backgroundImage: `url(${pic})` }}
    >
      {circles.map((circle) => (
        <div
          key={circle.id}
          className={styles.circle} 
          style={{
            left: `${circle.x}px`,   
            top: `${circle.y}px`,    
          }}
          onMouseDown={(e) => handleMouseDown(circle.id, e)}
        ></div>
      ))}
    </div>
  );
};

export default ImageSection ;
