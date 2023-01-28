import { React, useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';

function CountryDetails() {
    const { id } = useParams();
    const [country, setCountry] = useState(null)

    useEffect(() => {
        (async () => {
            const res = await axios.get(
                `https://ih-countries-api.herokuapp.com/countries/${id}`)

            setCountry(res.data)
            console.log('Im running');
        })()
    }, [id])

    /* useEffect(() => {
        (async () => {
            const response = await axios.get(
                `https://ih-countries-api.herokuapp.com/countries/${id}`
            )
            console.log(response.data)
            setCountry(response.data)
            })();
        }, []); */
  return (
    <div>
    {country ? (
    <div className='col-7 position-sticky' style={{margin: "100px 300px 100px 10px"}}>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
        <h1>{country.name.common}</h1>
        <table className='table'>
            <thead></thead>
            <tbody>
                <tr>
                    <td style={{width: "100%"}}>Capital</td>
                    <td>{country.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{country.area}km<sup>2</sup></td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            {country.borders.map(country => {
                                return (
                                    <>
                                    {console.log('im running')}
                                    <li  >
                                    <Link key={country} to={`/${country}`}>{country}</Link>
                                    </li>
                                    </>
                                )
                            })}
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )

     : <>Loading...</>}
    </div>
  )
}

export default CountryDetails