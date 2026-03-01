// We import our city configuration and normalize Open-Meteo data
// into the shape expected by the existing UI.
import cityConfig from "../../config/city.json";
import { getwmoToDescription, getwmoToIcon } from "../../services/wmoconverter";

export default async function handler(req, res) {
  const { city, country, latitude, longitude, timezone } = cityConfig;

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,is_day,visibility&daily=sunrise,sunset&timezone=${encodeURIComponent(
      timezone
    )}&timeformat=unixtime&wind_speed_unit=ms&models=meteofrance_seamless`
  );

  if (!response.ok) {
    res.status(response.status).json({ message: "Unable to fetch weather data" });
    return;
  }

  const data = await response.json();
  const weatherCode = data.current.weather_code;
  const isDay = data.current.is_day;

  const normalizedWeatherData = {
    name: city,
    timezone: data.utc_offset_seconds,
    dt: data.current.time,
    main: {
      temp: data.current.temperature_2m,
      feels_like: data.current.apparent_temperature,
      humidity: data.current.relative_humidity_2m,
    },
    weather: [
      {
        description: getwmoToDescription(weatherCode),
        icon: getwmoToIcon(weatherCode, isDay),
      },
    ],
    wind: {
      speed: data.current.wind_speed_10m,
      deg: data.current.wind_direction_10m,
    },
    visibility: data.current.visibility,
    sys: {
      country,
      sunrise: data.daily.sunrise[0],
      sunset: data.daily.sunset[0],
    },
  };

  res.status(200).json(normalizedWeatherData);

}
