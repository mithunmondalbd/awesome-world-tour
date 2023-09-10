import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = (country) => {
        console.log('add to your visited country')
        const newVisitCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitCountry);
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
    }


    return (
        <div >
            <h3>Countries: {countries.length}</h3>

            <div>
                <h5>Visited countries</h5>
                <ul>
                    {
                        visitedCountry.map(country => <li style={{ borderLeft: '1px solid green', padding: '3px 40px', fontSize: '20px' }} key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flag-container">
                <h4>Visited Flag</h4>
                {
                    visitedFlag.map((flag, idx) => <img key={idx} src={flag} alt=""/>)
                }
            </div>

            <div className="counties-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;