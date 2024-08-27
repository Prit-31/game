const baseUrl = "http://api.weatherapi.com/v1/current.json?key=083eff3cdd90420aab985227242508";
export const getWetherDataForCity = async (city) => {
    const response = await fetch(`${baseUrl}&q=${city}&api=yes`)
    return await response.json()
}
export const getWetherDataForLocation = async (lat, lon) => {
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&api=yes`)
    return await response.json()
}