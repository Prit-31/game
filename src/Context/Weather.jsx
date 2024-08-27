import { useContext, useState, createContext } from 'react'
import { getWetherDataForCity, getWetherDataForLocation } from '../api/WeatherApi'
export const WeatherContext = createContext(null)

export const useWeather = () => {
    return useContext(WeatherContext)
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null)

    const fetchData = async () => {
        const response = await getWetherDataForCity(searchCity);
        setData(response)
    }

    const fetchCurrentUserLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWetherDataForLocation(
                position.coords.latitude,
                position.coords.longitude
            ).then((data)=> setData(data))
        })
        
    }
    return (

        <WeatherContext.Provider value={{ searchCity, data, setSearchCity, fetchData, fetchCurrentUserLocationData }}>
            {props.children}
        </WeatherContext.Provider>
    )
}