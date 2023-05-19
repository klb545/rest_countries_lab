import CountriesContainer from './containers/CountriesContainer';
import VisitedCountriesContainer from './containers/VisitedCountriesContainer';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const fetchAndUpdateCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    
    // // adds another key-value pair (markedAsVisited="false") onto every object in the array
    // const updatedJsonData = await jsonData.map((country) => {
    //   return { ...country, markedAsVisited: "false" };
    // });
    // setCountries(updatedJsonData);

    setCountries(jsonData);
  }

  useEffect(() => {
    fetchAndUpdateCountries();
  }, []);


  return (
    <div className="App">

      <h1>Country Bucket List</h1>

      <div className="containers">

        <div className="countries-container">
          <CountriesContainer countries={countries} setCountries={setCountries} visitedCountries={visitedCountries} setVisitedCountries={setVisitedCountries}/>
        </div>

        <div className="visited-countries-container">
          <VisitedCountriesContainer visitedCountries={visitedCountries} setVisitedCountries={setVisitedCountries}/>
        </div>

      </div>

    </div>
  );
}

export default App;



