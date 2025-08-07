import { Select } from '@mantine/core';
import './Filters.css';

interface FiltersProps {
  cities: string[];
  fuelTypes: string[];
  years: string[];
  selectedCity: string;
  selectedFuel: string;
  selectedYear: string;
  onCityChange: (value: string) => void;
  onFuelChange: (value: string) => void;
  onYearChange: (value: string) => void;
}

const Filters = ({
  cities,
  fuelTypes,
  years,
  selectedCity,
  selectedFuel,
  selectedYear,
  onCityChange,
  onFuelChange,
  onYearChange
}: FiltersProps) => {
  return (
    <div className="filters-container">
      <Select
        label="Select Metro City"
        data={cities}
        value={selectedCity}
        onChange={(value) => value && onCityChange(value)}
        className="filter-select"
      />

      <Select
        label="Select Fuel Type"
        data={fuelTypes}
        value={selectedFuel}
        onChange={(value) => value && onFuelChange(value)}
        className="filter-select"
      />

      <Select
        label="Select Year"
        data={years}
        value={selectedYear}
        onChange={(value) => value && onYearChange(value)}
        className="filter-select"
      />
    </div>
  );
};

export default Filters;
