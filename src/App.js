import React, { useState, useCallback } from 'react';
import ImageSection from './components/ImageSection/ImageSection';
import InputBoxSection from './components/InputBoxSection/InputBoxSection';
import MaterialSelection from './components/MaterialSelection/MaterialSelection';
import './App.css';  

function App() {
  const [circles, setCircles] = useState([{ x: 100, y: 100, id: 1 }]);
  const [selectedCircleId, setSelectedCircleId] = useState(1);
  const [selectedContent, setSelectedContent] = useState(''); 

  const addNewCircle = useCallback(() => {
    const newCircle = {
      x: 100, y: 100, id: circles.length + 1, 
    };
    setCircles([...circles, newCircle]); 
    setSelectedCircleId(newCircle.id); 
  }, [circles]);

  const updateCirclePosition = useCallback((newPos) => {
    setCircles(
      circles.map((circle) =>
        circle.id === selectedCircleId
          ? { ...circle, ...newPos }
          : circle
      )
    );
  }, [circles, selectedCircleId]);

  const setSelectedCircleIdCallback = useCallback((id) => {
    setSelectedCircleId(id);
  }, []);

  const selectedCircle = circles.find((circle) => circle.id === selectedCircleId); 

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-lg-6 col-md-6 col-sm-6 column-1 ">
          <ImageSection circles={circles} setCircles={setCircles} setSelectedCircleId={setSelectedCircleIdCallback}/>
          <button className="apple-button interaction-section add-new-circle-button" onClick={addNewCircle}>Add New Circle</button>
          <InputBoxSection className="interaction-section" circlePos={selectedCircle} setCirclePos={updateCirclePosition}/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 column-2 ">
          <MaterialSelection selectedContent={selectedContent} setSelectedContent={setSelectedContent} className="material-selection" />
        </div>
      </div>
      <button className="apple-button interaction-section" onClick={() => console.log({ circles, selectedContent })}>Submit</button>
    </div>
  );
}

export default App;
