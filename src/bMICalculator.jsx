import React, { useState } from 'react';

export function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (w > 0 && h > 0) {
      // Formula: weight / (height * height)
      const bmi = (w / (h ** 2)).toFixed(2);
      setBmiResult(bmi);

      // Category Logic
      if (bmi >= 19 && bmi <= 30) {
        setCategory('You have a healthy weight.');
      } else if (bmi < 19) {
        setCategory('You are underweight.');
      } else {
        setCategory('You are overweight.');
      }
    } else {
      alert("Please enter valid positive numbers for weight and height.");
    }
  };

  const clearForm = () => {
    setWeight('');
    setHeight('');
    setBmiResult(null);
    setCategory('');
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '400px', 
      margin: '0 auto', 
      fontFamily: 'Arial, sans-serif',
      border: '1px solid #ddd',
      borderRadius: '10px',
      backgroundColor: '#00ff88',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center' }}>BMI Calculator</h2>
      <p style={{ fontSize: '0.85rem', color: '#555' }}>
        Welcome! This app calculates your Body Mass Index (BMI) using your weight in kg and height in meters.
      </p>

      <form onSubmit={calculateBMI}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Weight (kg):</label>
          <input 
            type="number" 
            step="0.1"
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            placeholder="e.g. 65"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required 
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Height (m):</label>
          <input 
            type="number" 
            step="0.01"
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
            placeholder="e.g. 1.8"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required 
          />
        </div>

        <button type="submit" style={{ 
          width: '100%', 
          padding: '10px', 
          backgroundColor: '#00bb55', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '10px'
        }}>
          Calculate BMI
        </button>
      </form>

      {bmiResult && (
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '5px',
          textAlign: 'center'
        }}>
          <h3>Your BMI is {bmiResult} kg/m²</h3>
          <p><strong>{category}</strong></p>
          <button onClick={clearForm} style={{ 
            marginTop: '10px', 
            background: 'none', 
            border: 'none', 
            color: '#007bff', 
            textDecoration: 'underline', 
            cursor: 'pointer' 
          }}>
            Reset
          </button>
        </div>
      )}

      <footer style={{ marginTop: '20px', fontSize: '0.7rem', color: '#999', textAlign: 'center' }}>
        Developer: Daniel Dav-Emmanuel
      </footer>
    </div>
  );
};