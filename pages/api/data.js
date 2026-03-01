//We import our city.json where city's are stored.
import cityConfig from "../../config/city.json"

export default async function handler(req, res) {
  const { latitude, longitude, timezone } = cityConfig;
 

 //fetch open-meteo API
/*
We get (for the moment) current weather data:
- temperature_2m
- weather_code
- relative_humidity_2m
- apparent_temperature
- wind_speed_10m
- wind_direction_10m
- is_day
*/
 const getWeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,is_day&timezone=${encodeURIComponent(timezone)}`
 );
  const data = await getWeatherData.json();
  
  res.status(200).json(data);
  console.log(data);
}
