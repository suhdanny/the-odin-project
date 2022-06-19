
const search = document.getElementById('search');
const switchButton = document.querySelector('.btn');
let currentCity = 'Toronto';

const Manager = (function() {
    const apiKey = '6588c841682bd4f393bd51ca45e35105';
    let isCelsius = true;

    const switchUnit = () => {
        isCelsius = !isCelsius;

        const unitElement = document.querySelector('.unit');
        (isCelsius) ? unitElement.textContent = '°F' : unitElement.textContent = '°C';
    }

    const getIsCelsius = () => isCelsius;

    const updatePage = city => {
        fetchWeatherJSON(city)
        .then(data => processWeatherJSON(data))
        .then(obj => populateMetric(obj));
    }

    const fetchWeatherJSON = async function(city) {
        let unit = (isCelsius) ? 'metric' : 'imperial';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`);
        const weatherJSON = await response.json();
        return weatherJSON;
    }

    const processWeatherJSON = async function(data) {
        return {
            city: data.name,
            date: convertUTCtoString(data.dt),
            description: data.weather[0].description,
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            visibility: data.visibility,
            wind_speed: data.wind.speed,
            wind_direction: degToCompass(data.wind.deg),
            cloudiness: data.clouds.all,
            country: data.sys.country,
            sunrise: convertUTCtoTime(data.sys.sunrise),
            sunset: convertUTCtoTime(data.sys.sunset),
            day_length: calculateDayLength(data.sys.sunrise, data.sys.sunset)
        }
    }

    const populateMetric = obj => {
        let measurement = (isCelsius) ? '°C' : '°F';
        let windSpeedUnit = (isCelsius) ? 'm/s' : 'mi/hr'
        const weatherLocation = document.querySelector('.city');
        const date = document.querySelector('.date');
        const currentTemp = document.querySelector('.current-temp');
        const feelTemp = document.querySelector('.feel-temp');
        const description = document.getElementById('description');
        const sunrise = document.getElementById('sunrise');
        const sunset = document.getElementById('sunset');
        const dayLength = document.getElementById('day-length');
        const pressure = document.getElementById('pressure');
        const humidity = document.getElementById('humidity');
        const visibility = document.getElementById('visibility');
        const cloudiness = document.getElementById('cloudiness');
        const windSpeed = document.getElementById('speed');
        const windDirection = document.getElementById('direction');

        weatherLocation.textContent = `${obj.city}, ${obj.country}`;
        date.textContent = obj.date;
        description.textContent = obj.description;
        currentTemp.textContent = `${obj.temp}${measurement}`;
        feelTemp.textContent = `${obj.feels_like}${measurement}`;
        sunrise.textContent = `${obj.sunrise} (EST)`;
        sunset.textContent = `${obj.sunset} (EST)`;
        dayLength.textContent = `${obj.day_length}hr`;
        pressure.textContent = `${obj.pressure}hPa`;
        humidity.textContent = `${obj.humidity}%`;
        visibility.textContent = `${obj.visibility}m`;
        cloudiness.textContent = `${obj.cloudiness}%`;
        windSpeed.textContent = `${obj.wind_speed}${windSpeedUnit}`;
        windDirection.textContent = `${obj.wind_direction}`;
    }

    const convertUTCtoTime = sec => new Date(sec * 1000).toLocaleTimeString();

    const convertUTCtoString = sec => new Date(sec * 1000).toDateString();

    const calculateDayLength = (sunriseUTC, sunsetUTC) => {
        const date1 = new Date(sunriseUTC * 1000);
        const date2 = new Date(sunsetUTC * 1000);
        const hours = (date2.getTime() - date1.getTime()) / 1000 / 60 / 60;
        return round(hours);
    }

    const round = num => {
        let m = Number((Math.abs(num) * 100).toPrecision(15));
        return Math.round(m) / 100 * Math.sign(num);
    }

    const degToCompass = deg => {
        const val = Math.floor((deg / 22.5) + 0.5);
        const degArr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return degArr[(val % 16)];
    }

    return {
        fetchWeatherJSON,
        getIsCelsius,
        updatePage,
        switchUnit,
    }
})();

search.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        currentCity = e.target.value;
        Manager.updatePage(currentCity);
    }
});

switchButton.addEventListener('click', () => {
    Manager.switchUnit();
    Manager.updatePage(currentCity);
})

Manager.updatePage('Toronto');