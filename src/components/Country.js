const Country = ({ countryInfo, handleButtonClick }) => {

  const handleClick = () => {
    handleButtonClick(countryInfo);
  };

  return (
    <div className="country">
      <label>
        <button onClick={handleClick}>{countryInfo.flag}</button>
        {countryInfo.name.common}
      </label>
      <br/>
      <br/>
    </div>
  );
};

export default Country;


