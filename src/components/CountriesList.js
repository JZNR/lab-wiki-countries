import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CountryDetails from './CountryDetails'

function CountriesList(props) {

    // const [showCountry, setShowCountry] = useState(false);

    // function DisplayCountry() {
    //     setShowCountry(!showCountry);
    // }
  
  return (
    <div className='container' style={{margin: "100px 50px", maxHeight:"90vh", overflow: "scroll"}}>
        <div className='row'>
        <div className="col-5">
            <div class="list-group">
            {props.countries.map(country => {
                const flag = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`
                return (
                    <>
                    <Link key={country._id} className="list-group-item list-group-item-action" to={country.alpha3Code}
                    >
                    <img src={flag} alt="" /> <br />
                    {country.name.common}</Link>
                    </>
                )
            })}
                    <div>
                </div>
            </div>
         </div>
        </div>
    </div>
  )
}

export default CountriesList