
import { FaSearch } from "react-icons/fa";
import data from '../data.json'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

function Countries() {
    const [countries, setCountries] = useState(data);
  
    const filterByName = (event) => {
      const searchTerm = event.target.value.toLowerCase();
      const regex = new RegExp(searchTerm, 'i');
      setCountries(data.filter(country => regex.test(country.name.toLowerCase())));
    }
  
    const filterByRegion = (event) => {
      const region = event.target.value.toLowerCase();
      setCountries(data.filter(country => country.region.toLowerCase().includes(region)));
    }

    const { darkMode } = useDarkMode();

    return (
      <div className="container">
          <form className="form">
          <div className={`input-form ${darkMode ? "darker" : "lighter"}`}>
            <FaSearch />
            <input className={darkMode ? 'darker' : 'lighter'} onChange={filterByName} type="text" placeholder="Search for a country..." />
          </div>
          <select onChange={filterByRegion} className={darkMode ? 'darker' : 'lighter'}>
            <option value="">Filtered by region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </form>
        <div className="grid-container">
          {countries.map((item) => (
            <Link to={`/${item.name}`}  key={item.population + Math.random()} style={{ textDecoration:'none' }}>
              <div className={`grid-items-card ${darkMode ? "darker" : "lighter"}`}>
                <img src={item.flags.png}/>
                <div className="grid-content">
                  <h3>{item.name}</h3>
                  <div>
                    <p><span>Population:</span>{item.population}</p>
                    <p><span>Region:</span>{item.region}</p>
                    <p><span>Capital:</span>{item.capital}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

export default Countries