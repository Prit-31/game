import React from 'react'
import { useWeather } from '../Context/Weather'


const Input = () => {
    const weather = useWeather()
    return (
        <>
            <input
                className='input-field'
                placeholder='Search City'
                value={weather.searchCity ? weather.searchCity : ""}
                onChange={(e) => weather.setSearchCity(e.target.value)} />
        </>
    )
}

export default Input