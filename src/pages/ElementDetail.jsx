import { IoMdArrowRoundBack } from "react-icons/io";
import "./ElementDetail.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import data from "../data.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function ElementDetail() {
  const [country, setCountry] = useState(data);
  const { countryName } = useParams();
  const navigate = useNavigate()

  const handleFilter = () => {
    const filteredData = data.filter((e) => e.name === countryName);
    setCountry([...filteredData]); // Create a new array reference
  };                

  const handleBorderCountryClick = (borderCountryName) => {
    const borderCountry = data.find((item) => item.name === borderCountryName);
    if (borderCountry && borderCountry.borders && Array.isArray(borderCountry.borders)) {
      // Check if borders exist and is an array
      navigate(`/country/${borderCountry.name}`);
    } 
    
  };

  useEffect(() => {
    console.log('rendering',countryName )
    handleFilter();
  }, [countryName]);

  return (
    <div className="container">
      <div className="detail-container">
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <button className="back-btn">
            <IoMdArrowRoundBack />
            Back
          </button>
        </NavLink>
        {country.map((item, index) => {
          return (
            <div>
              <div className="country-detail" key={index}>
                <img className="detail-img" src={item.flags.png} alt="" />
                <div className="detail-content">
                  <h3>{item.name}</h3>
                  <div className="contents">
                    <div className="contents-1">
                      <p>
                        <span>Native Name:</span>
                        {item.nativeName}
                      </p>
                      <p>
                        <span>Population:</span>
                        {item.population}
                      </p>
                      <p>
                        <span>Region:</span>
                        {item.region}
                      </p>
                      <p>
                        <span>Sub Region:</span>
                        {item.subregion}
                      </p>
                      <p>
                        <span>Capital:</span>
                        {item.capital}
                      </p>
                    </div>
                    <div>
                      <p>
                        <span>Top Level Domain:</span>
                        {item.topLevelDomain}
                      </p>
                      <p>
                        <span>Currency:</span>
                        {item.currencies && item.currencies[0].name}
                      </p>
                      <p>
                        <span>Languages:</span>
                        {item.languages && item.languages[0].name}
                      </p>
                    </div>
                  </div>
                  {item.borders && Array.isArray(item.borders) && (
                      <div className="border-countries-section">
                        <h4>Border Countries:</h4>
                        {item.borders.map((borderCountryCode) => {
                          const borderCountry = data.find((item) => item.alpha3Code === borderCountryCode);
                          return (
                            <Link to={`/country/${borderCountry.name}`} className="border-countries" key={borderCountryCode}>
                              <button className="border-btn" onClick={() => handleBorderCountryClick(borderCountryCode)}>
                                {borderCountry ? borderCountry.translations.br : borderCountryCode}
                              </button>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ElementDetail;
