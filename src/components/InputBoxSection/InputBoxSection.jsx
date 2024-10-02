import React from 'react';
import styles from './InputBoxSection.module.css'

const InputBoxSection = ({ circlePos, setCirclePos }) => {
  if (!circlePos) return null; 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCirclePos({ [name]: parseInt(value, 10) || 0 }); 
  };

  return (
    <div className={styles['input-section']}>
      <label className={styles.label}>X: </label>
      <input type="number" name="x" value={circlePos.x} onChange={handleInputChange} className={styles.input}/>
      <label className={styles.label}>Y: </label>
      <input type="number" name="y" value={circlePos.y} onChange={handleInputChange} className={styles.input}/>
    </div>
  );
};

export default InputBoxSection;
