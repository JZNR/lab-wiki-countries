import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import axios from 'axios';
import { useEffect } from 'react';
import { React, useState } from 'react';

function App() { 

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
        const response = await axios.get(
            "https://ih-countries-api.herokuapp.com/countries"
        )
        setCountries(response.data);
        })();
    }, []);

  return (
     <div className="App">
     <Navbar/>
     <CountriesList countries={countries}/>

     <Routes>
        <Route path="/:id" element={<CountryDetails/>}/>
     </Routes>
     </div>
  );
}

export default App;
