let cityname = document.querySelector(".weather-city");
let datetime = document.querySelector(".date");
let temperature = document.querySelector(".weather-temp");
let icon = document.querySelector(".weather-icon");
let mintemp = document.querySelector(".mintemp");
let maxtemp = document.querySelector(".maxtemp");
let feel = document.querySelector(".weather-feel");
let searchForm = document.querySelector(".search-form");
let humid = document.querySelector(".weather-humud");
let drop = document.querySelector(".weather-wind");
let pressure = document.querySelector(".weather-pressure");
let city = "London";

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityInput = document.querySelector("#searchs");
    city = cityInput.value;
    getweather();
});

function gettime(dt) {
    const curr = new Date(dt * 1000);
    const option = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    const formats = new Intl.DateTimeFormat("en-US", option);
    return formats.format(curr);
}

function get(code) {
    return new Intl.DisplayNames([code], { type: 'region' }).of(code);
}

const getweather = async () => {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b4d719c8ef90178bd9122d4c3a94e70c`;
        
        const res = await fetch(url);
        const data = await res.json();
console.log(data);
        const { main, name, weather, wind, sys, dt } = data;
        cityname.innerHTML = `${name}, ${get(sys.country)}`;
        datetime.innerHTML = gettime(dt);
        temperature.innerHTML = `Temperature: ${(main.temp - 273.15).toFixed(2)}°C`;
        mintemp.innerHTML = `Min: ${(main.temp_min - 273.15).toFixed(2)}°C`;
        maxtemp.innerHTML = `Max: ${(main.temp_max - 273.15).toFixed(2)}°C`;
        feel.innerHTML = `Feels like: ${(main.feels_like - 273.15).toFixed(2)}°C`;
        humid.innerHTML = `Humidity: ${main.humidity}%`;
        drop.innerHTML = `Wind speed: ${wind.speed} m/s`;
        pressure.innerHTML = `Pressure: ${main.pressure} hPa`;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@4x.png" alt="Weather icon" />`;

    } catch (e) {
        console.error(e);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getweather(); // Load initial weather data for default city
});
