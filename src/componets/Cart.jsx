import React from 'react'
import { useWeather } from '../Context/Weather'

function Cart() {
    const weather = useWeather()
    return (
        <div className='weather-info'>
            <div className="info">
                <img src={weather?.data?.current?.condition?.icon} />
                <h2>{weather?.data?.current?.temp_c} C</h2>
            </div>
            <div className="location">

                <h5>{weather?.data?.location?.name},{weather?.data?.location?.region} {weather?.data?.location?.country}</h5>
            </div>
        </div>
    )
}

export default Cart