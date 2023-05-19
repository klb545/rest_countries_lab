import Country from '../components/Country';

const CountriesContainer = ({ countries, setCountries, visitedCountries, setVisitedCountries }) => {

  const handleButtonClick = (clickedCountryComponent) => {
    // if (clickedCountryComponent.markedAsVisited === 'false') {
      const updatedVisitedCountries = [...visitedCountries, clickedCountryComponent];
      setVisitedCountries(updatedVisitedCountries);
      const updatedCountries = countries.filter(country => country !== clickedCountryComponent);
      setCountries(updatedCountries);
    // }
  };

  const countriesList = countries.map(country => <Country key={country.name.common} countryInfo={country} handleButtonClick={handleButtonClick} />)

  return (
    <div className="countries-container">
        <h2>To Visit</h2>
        {countriesList}
    </div>
  );
};

export default CountriesContainer;



