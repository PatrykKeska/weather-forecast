import React from 'react'
import '../component/Result.css'

const Result = (props) => {

    const { value, date
        , city
        , sunrise
        , sunset
        , temperature
        , pressure
        , wind
        , error } = props.weather;

    let content = null;


    if (city && !error) {
        const sunRise = new Date(sunrise * 1000).toLocaleTimeString();
        const sunSet = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <div className="weatherResult">
                <p>Search results for : <strong>{city}</strong>  on {date} </p>
                <p><em>Temperature </em>: {temperature} °C</p>
                <p><em>Pressure </em>  : {pressure} hPa</p>
                <p><em>Wind</em> : {wind} m/s</p>
                <p><em>Sunrise </em> : {sunRise}</p>
                <p><em> Sunset </em> : {sunSet}</p>
            </div>
        )

    }

    return (
        <>
            {error ? `lack ${city} in the datebase ` : content
            }

        </ >
    )

}


export default Result