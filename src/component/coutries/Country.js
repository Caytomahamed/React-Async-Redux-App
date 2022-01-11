import React from 'react'
import './Country.css'
const Country = (props) => {
    const {flags,name ,population,capital,region} = props.country
    return (
      <div className="country">
        <div className="country_flag">
          <img src={flags.png} className="country_flag-img" />
        </div>

        <div className="country_body">
          <h3>📛{name.common}</h3>
          <p className="country_info">
            <span className="bold">🤺Population:</span>
            {population}
          </p>

          <p className="country_info">
            <span className="bold">®Region:</span>
            {region}
          </p>
          <p className="country_info">
            <span className="bold">🏙Capital:</span>
            {capital}
          </p>
        </div>
      </div>
    );
}

export default Country
