
export const getwmoToDescription = (wmo) => {
    const wmoDict = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Drizzle: Light intensity",
        53: "Drizzle: Moderate intensity",
        55: "Drizzle: Dense intensity",
        56: "Freezing Drizzle: Light intensity",
        57: "Freezing Drizzle: Dense intensity",
        61: "Rain: Slight intensity",
        63: "Rain: Moderate intensity",
        65: "Rain: Heavy intensity",
        66: "Freezing Rain: Light intensity",
        67: "Freezing Rain: Heavy intensity",
        71: "Snow fall: Slight intensity",
        73: "Snow fall: Moderate intensity",
        75: "Snow fall: Heavy intensity",
        77: "Snow grains",
        80: "Rain showers: Slight",
        81: "Rain showers: Moderate",
        82: "Rain showers: Violent",
        85: "Snow showers: Slight",
        86: "Snow showers: Heavy",
        95: "Thunderstorm: Slight or moderate",
        96: "Thunderstorm with slight hail",
        99: "Thunderstorm with heavy hail"
    };
    
    return wmoDict[wmo] || "Unknown conditions";
};

export const getwmoToIcon = (wmo,isDay)=>{
    const iconsDay = {
        0: "01d",
        1: "02d",
        2: "03d",
        3: "04d",
        45: "50d",
        48: "50d",
        51: "09d",
        53: "09d",
        55: "09d",
        56: "09d",
        57: "09d",
        61: "10d",
        63: "10d",
        65: "10d",
        66: "10d",
        67: "10d",
        71: "13d",
        73: "13d",
        75: "13d",
        77: "13d",
        80: "09d",
        81: "10d",
        82: "10d",
        85: "13d",
        86: "13d",
        95: "11d",
        96: "11d",
        99: "11d"
    };

    const iconsNight = {
        0: "01n",
        1: "02n",
        2: "03n",
        3: "04n",
        45: "50n",
        48: "50n",
        51: "09n",
        53: "09n",
        55: "09n",
        56: "09n",
        57: "09n",
        61: "10n",
        63: "10n",
        65: "10n",
        66: "10n",
        67: "10n",
        71: "13n",
        73: "13n",
        75: "13n",
        77: "13n",
        80: "09n",
        81: "10n",
        82: "10n",
        85: "13n",
        86: "13n",
        95: "11n",
        96: "11n",
        99: "11n"
    };

    return Number(isDay) === 1  ? iconsDay[wmo] || "01d" : iconsNight[wmo] || "01n";

}