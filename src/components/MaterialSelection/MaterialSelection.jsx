import React, { useState } from 'react';
import styles from './MaterialSelection.module.css';

const MaterialSelection = ({ selectedContent, setSelectedContent }) => {
  const [flippingMaterial, setFlippingMaterial] = useState(null);


  const materials = [
     'text1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
     'text2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
     'text3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
     'text4: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', 
     'text5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. '];

 
  const handleMaterialClick = (material) => {
    setFlippingMaterial(material); 
    setTimeout(() => {
      setFlippingMaterial(null);
      setSelectedContent(material); 
    }, 600); 
  };

  return (
    <div className={styles['material-selection']}>
      {materials.map((material) => (
        <p
          key={material}
          onClick={() => handleMaterialClick(material)}
          className={`${styles['material-button']} ${flippingMaterial === material ? styles.flipping : ''} ${selectedContent === material ? styles.selected : ''}`}

        >
          {material}
        </p>
      ))}
    </div>
  );
};

export default MaterialSelection;
