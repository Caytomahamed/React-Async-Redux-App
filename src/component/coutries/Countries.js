import React from 'react'
import './Countries.css'
import Country from './Country'

const Countries = (props) => {
    const { countries } = props
    return (
        <div className='countries'>
            {countries.map((country, index) => (
               <Country country = {country} key={index}/>
            ))}
        </div>
    )
}

export default Countries
