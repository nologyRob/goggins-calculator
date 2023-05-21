import React, { useState } from 'react';
import davidGogginsImage from './david-goggins.jpg';
import "./App.scss"
import Form from './components/Form/Form';
import DisplayComponent from './components/DisplayComponent/DisplayComponent';

const App = () => {
  const [kilometers, setKilometers] = useState(null);

  const handleKilometersChange = (value) => {
    setKilometers(value);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Tony Groggins Calculator</h1>
      <Form onKilometersChange={handleKilometersChange} />
      <DisplayComponent kilometers={kilometers} target={500} />
      <img src={davidGogginsImage} alt="David Goggins" className="goggins-image" />
    </div>
  );
};

export default App;