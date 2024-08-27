import './App.css'
import Input from './componets/Input'
import Button from './componets/Button'
import Cart from './componets/Cart'
import { useWeather } from './Context/Weather'
import { useEffect } from 'react'

function App() {
  const weather = useWeather()
  useEffect(() => {

    weather.fetchCurrentUserLocationData()
  }, [])
  const resetBtn = () =>{
    weather.fetchCurrentUserLocationData()
    weather.setSearchCity(weather.data = "")
  }
  
  return (
    <>
      <h1>Weather Forcast</h1>
      <span className="line"></span>
      <Input />
      <Button onClick={weather.fetchData} value="Search"
      />
      <Cart />
      <Button value="Reset" onClick={resetBtn} />

    </>
  )
}

export default App
