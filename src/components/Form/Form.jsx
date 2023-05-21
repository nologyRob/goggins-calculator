import React, { useState } from 'react';
import "./Form.scss"

const Form = ({ onKilometersChange }) => {
    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const kilometers = parseFloat(inputValue);
    onKilometersChange(kilometers);
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <label>
        Kilometers run this year:
        <input type="number" value={inputValue} onChange={handleInputChange} className="input-field" />
      </label>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default Form