import React from 'react';
import Country from '../components/Country';

const VisitedCountriesContainer = ({ visitedCountries, setVisitedCountries }) => {

  const handleButtonClick = (clickedCountryComponent) => {
    const updatedVisitedCountries = visitedCountries.filter((visitedCountry) => visitedCountry !== clickedCountryComponent);
    setVisitedCountries(updatedVisitedCountries);
  };

  const visitedCountriesList = visitedCountries.map((visitedCountry) => <Country key={visitedCountry.name.common} countryInfo={visitedCountry} handleButtonClick={handleButtonClick}/>);

  return (
    <div className="visited-countries-container">
        <h2>Visited</h2>
        {visitedCountriesList}
    </div>
  );
};

export default VisitedCountriesContainer;






















