import React, { useState } from 'react';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [result, setResult] = useState('');

    const convertToFahrenheit = () => {
        const celsiusValue = parseFloat(celsius);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            setResult(`${celsiusValue}°C is ${fahrenheitValue.toFixed(2)}°F`);
        } else {
            setResult('Please enter a valid temperature in Celsius.');
        }
    };

    const convertToCelsius = () => {
        const fahrenheitValue = parseFloat(fahrenheit);
        if (!isNaN(fahrenheitValue)) {
            const celsiusValue = (fahrenheitValue - 32) * 5/9;
            setResult(`${fahrenheitValue}°F is ${celsiusValue.toFixed(2)}°C`);
        } else {
            setResult('Please enter a valid temperature in Fahrenheit.');
        }
    };

    return (
        <div className="container">
            <h1>Temperature Converter</h1>
            <div className="converter">
                <input 
                    type="number" 
                    value={celsius} 
                    onChange={(e) => setCelsius(e.target.value)} 
                    placeholder="Enter temperature in Celsius" 
                />
                <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
                
                <input 
                    type="number" 
                    value={fahrenheit} 
                    onChange={(e) => setFahrenheit(e.target.value)} 
                    placeholder="Enter temperature in Fahrenheit" 
                />
                <button onClick={convertToCelsius}>Convert to Celsius</button>
                
                <p>{result}</p>
            </div>
        </div>
    );
};

export default TemperatureConverter;