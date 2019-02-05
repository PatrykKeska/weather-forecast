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
                <p>Wynik Wyszukiwania dla miasta : <strong>{city}</strong> dnia {date} </p>
                <p><em>Temperatura </em>: {temperature} °C</p>
                <p><em>Cisnienie   </em>  : {pressure} hPa</p>
                <p><em>Wiatr   </em> : {wind} m/s</p>
                <p><em> Wschód Słońca   </em> : {sunRise}</p>
                <p><em> Zachód Słońca   </em> : {sunSet}</p>
            </div>
        )

    }

    return (
        <>
            {error ? `Brak ${city} w bazie danych` : content
            }

        </ >
    )

}


export default Result