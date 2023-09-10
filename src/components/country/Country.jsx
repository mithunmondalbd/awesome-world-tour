import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    const {name, flags, population, startOfWeek, area, timezones, cca3} = country;

    const [visited, setVisited] = useState(false);
    
    const handleVisited = () =>{
        setVisited(!visited);
    }
    
    return (
        <div className={`country ${visited ? 'visited': 'not-visited'}`}>
            <h3 style={{color: visited ? 'purple': 'red'}}>{name?.common}</h3>
            <img style={{height: '200px', width: '300px'}} src={flags?.png}/>
            <p>Population: {population}</p>
            <p>Star of day: {startOfWeek}</p>
            <p>Area: {area}</p>
            <p>timezones: {timezones[0]}</p>
            <p><small>Code: {cca3}</small></p>
            <div><button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Add Flag</button>
            </div>
            <br></br>
            
            <button onClick={handleVisited}>{visited ? 'visited': 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Country;