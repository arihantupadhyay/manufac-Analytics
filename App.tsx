// src/App.tsx

import Filters from './component/filters';

import './App.css';


import { useState } from 'react';
import { City, FuelType, Year } from './Data/fuelData';
import Chart from './component/Chart';

const App = () => {
  const [city, setCity] = useState<City>('Delhi');
  const [fuelType, setFuelType] = useState<FuelType>('Petrol');
  const [year, setYear] = useState<Year>('2023');

  return (
    <div className="app-container">
      <h1>Fuel Price Dashboard</h1>

      <div className="filters">
        <select value={city} onChange={(e) => setCity(e.target.value as City)}>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
        </select>

        <select value={fuelType} onChange={(e) => setFuelType(e.target.value as FuelType)}>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
        </select>

        <select value={year} onChange={(e) => setYear(e.target.value as Year)}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>

      <Chart city={city} fuelType={fuelType} year={year} />
    </div>
  );
};

export default App;
