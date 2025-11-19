/* ---------------- NAVBAR HIDE ON SCROLL ---------------- */
let lastScroll = 0;
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) navbar.classList.add("hide");
    else navbar.classList.remove("hide");
    lastScroll = currentScroll;
});

/* ---------------- VIDEO BACKGROUND WITH FADE ---------------- */
let currentVideo = 1;
const video1 = document.getElementById("video-background-1");
const video2 = document.getElementById("video-background-2");

const localVideoMap = {
    Sunny: "assets/images/sunny day.mp4",
    Clear: "assets/images/sunny day.mp4",
    Clouds: "assets/images/cloudy.mp4",
    Rain: "assets/images/heavy rain.mp4",
    Drizzle: "assets/images/rain cloudy.mp4",
    Thunderstorm: "assets/images/thundering.mp4",
    Snow: "assets/images/snow.mp4",
    Default: "assets/images/default background.mp4"
};

function changeBackground(condition) {
    const videoUrl = localVideoMap[condition] || localVideoMap["Default"];
    if (currentVideo === 1) {
        video2.src = videoUrl;
        video2.load();
        video2.play();
        video2.style.opacity = 1;
        video1.style.opacity = 0;
        currentVideo = 2;
    } else {
        video1.src = videoUrl;
        video1.load();
        video1.play();
        video1.style.opacity = 1;
        video2.style.opacity = 0;
        currentVideo = 1;
    }
}

/* ---------------- WEATHER DATA WITH METRICS ---------------- */
const weatherData = {
    Berlin: { 
        weather: 'Clouds', temp: 12, description: 'Overcast skies with a brisk breeze.',
        metrics: {
            Humidity: { value: '78%', icon: 'fa-tint' },
            Precipitation: { value: '0.2 mm', icon: 'fa-cloud-rain' },
            'Wind Speed': { value: '15 km/h', icon: 'fa-wind' },
            'Air Pressure': { value: '1008 hPa', icon: 'fa-gauge-high' },
            'Cloud Cover': { value: '90%', icon: 'fa-cloud' },
            'UV Index': { value: '1 (Low)', icon: 'fa-sun-haze' },
            Sunrise: { value: '07:35 AM', icon: 'fa-sunrise' },
            Sunset: { value: '04:15 PM', icon: 'fa-sunset' },
        }
    },
    Hamburg: { 
        weather: 'Rain', temp: 10, description: 'Light rain with clouds.',
        metrics: {
            Humidity: { value: '85%', icon: 'fa-tint' },
            Precipitation: { value: '2.5 mm', icon: 'fa-cloud-rain' },
            'Wind Speed': { value: '20 km/h', icon: 'fa-wind' },
            'Air Pressure': { value: '1005 hPa', icon: 'fa-gauge-high' },
            'Cloud Cover': { value: '100%', icon: 'fa-cloud' },
            'UV Index': { value: '0 (Low)', icon: 'fa-sun-haze' },
            Sunrise: { value: '07:30 AM', icon: 'fa-sunrise' },
            Sunset: { value: '04:20 PM', icon: 'fa-sunset' },
        }
    },
    Munich: { 
        weather: 'Clear', temp: 15, description: 'Bright and sunny.',
        metrics: {
            Humidity: { value: '60%', icon: 'fa-tint' },
            Precipitation: { value: '0 mm', icon: 'fa-cloud-rain' },
            'Wind Speed': { value: '5 km/h', icon: 'fa-wind' },
            'Air Pressure': { value: '1012 hPa', icon: 'fa-gauge-high' },
            'Cloud Cover': { value: '10%', icon: 'fa-cloud' },
            'UV Index': { value: '3 (Moderate)', icon: 'fa-sun-haze' },
            Sunrise: { value: '07:40 AM', icon: 'fa-sunrise' },
            Sunset: { value: '04:25 PM', icon: 'fa-sunset' },
        }
    },
    Prague: { 
        weather: 'Clouds', temp: 13, description: 'Mostly cloudy skies.',
        metrics: {
            Humidity: { value: '70%', icon: 'fa-tint' },
            Precipitation: { value: '0.5 mm', icon: 'fa-cloud-rain' },
            'Wind Speed': { value: '12 km/h', icon: 'fa-wind' },
            'Air Pressure': { value: '1010 hPa', icon: 'fa-gauge-high' },
            'Cloud Cover': { value: '80%', icon: 'fa-cloud' },
            'UV Index': { value: '1 (Low)', icon: 'fa-sun-haze' },
            Sunrise: { value: '07:38 AM', icon: 'fa-sunrise' },
            Sunset: { value: '04:22 PM', icon: 'fa-sunset' },
        }
    },
    Copenhagen: { 
        weather: 'Clouds', temp: 3, description: 'Cold and cloudy.',
        metrics: {
            Humidity: { value: '90%', icon: 'fa-tint' },
            Precipitation: { value: '1.0 mm', icon: 'fa-cloud-rain' },
            'Wind Speed': { value: '18 km/h', icon: 'fa-wind' },
            'Air Pressure': { value: '1007 hPa', icon: 'fa-gauge-high' },
            'Cloud Cover': { value: '95%', icon: 'fa-cloud' },
            'UV Index': { value: '0 (Low)', icon: 'fa-sun-haze' },
            Sunrise: { value: '07:25 AM', icon: 'fa-sunrise' },
            Sunset: { value: '04:10 PM', icon: 'fa-sunset' },
        }
    },
    Warsaw: { 
        weather: 'Thunderstorm', temp: 8, description: 'Stormy weather.',
        metrics: {
            Humidity: { value: '88%', icon: 'fa-tint' },
            Precipitation: { value: '5 mm', icon: 'fa-cloud-rain' },
            'Wind Speed': { value: '25 km/h', icon: 'fa-wind' },
            'Air Pressure': { value: '1002 hPa', icon: 'fa-gauge-high' },
            'Cloud Cover': { value: '100%', icon: 'fa-cloud' },
            'UV Index': { value: '0 (Low)', icon: 'fa-sun-haze' },
            Sunrise: { value: '07:28 AM', icon: 'fa-sunrise' },
            Sunset: { value: '04:15 PM', icon: 'fa-sunset' },
        }
    },
};

/* ---------------- MAIN WEATHER PANEL ---------------- */
let currentWeatherData = {...weatherData['Berlin']};
currentWeatherData.city = 'Berlin';

/* ---------------- UPDATE MAIN WEATHER PANEL ---------------- */
function updateMainWeather() {
    const mainPanel = document.getElementById("main-summary-panel");

    document.getElementById("city-name").textContent = currentWeatherData.city;
    document.getElementById("weather-condition").textContent = currentWeatherData.weather;
    document.getElementById("weather-description").textContent = currentWeatherData.description;
    document.getElementById("main-temp").textContent = currentWeatherData.temp;

    document.getElementById("weather-icon").className = "fa-solid fa-cloud";

    const metricsContainer = document.getElementById("detailed-metrics");
    metricsContainer.innerHTML = "";
    Object.entries(currentWeatherData.metrics).forEach(([name, data]) => {
        metricsContainer.innerHTML += `<p><i class="fa ${data.icon}"></i> <strong>${name}:</strong> ${data.value}</p>`;
    });

    changeBackground(currentWeatherData.weather);

    // Snow theme
    if (currentWeatherData.weather === 'Snow') {
        mainPanel.style.backgroundColor = 'rgba(0,0,0,0.6)';
        mainPanel.style.color = 'black';
        document.body.style.color = 'black';
    } else {
        mainPanel.style.backgroundColor = 'rgba(255,255,255,0.1)';
        mainPanel.style.color = 'white';
        document.body.style.color = 'white';
    }
}

/* ---------------- NEARBY CITIES ---------------- */
const nearbyCitiesData = Object.keys(weatherData).filter(city => city !== 'Berlin').map(city => {
    return { 
        city: city, 
        weather: weatherData[city].weather, 
        temp: weatherData[city].temp, 
        wind: weatherData[city].metrics['Wind Speed'].value,
        icon: weatherData[city].weather === 'Rain' ? 'fa-cloud-showers-heavy' :
              weatherData[city].weather === 'Clear' ? 'fa-sun' :
              weatherData[city].weather === 'Thunderstorm' ? 'fa-cloud-bolt' :
              'fa-cloud'
    };
});

function updateNearbyCities() {
    const container = document.getElementById("nearby-cities-container");
    container.innerHTML = "";

    nearbyCitiesData.forEach(city => {
        const cityCard = document.createElement("div");
        cityCard.classList.add("glass-panel");

        cityCard.innerHTML = `
            <h3>${city.city}</h3>
            <i class="fa ${city.icon}"></i>
            <p>${city.weather}</p>
            <span>${city.temp}°C</span>
            <span>${city.wind}</span>
        `;

        cityCard.addEventListener("click", () => {
            currentWeatherData = {...weatherData[city.city]};
            currentWeatherData.city = city.city;
            updateMainWeather();
        });

        container.appendChild(cityCard);
    });
}

/* ---------------- LIVE CLOCK ---------------- */
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    document.getElementById("current-time").textContent = timeString;
}

/* ---------------- PAGE LOAD ---------------- */
window.addEventListener("load", () => {
    updateMainWeather();
    updateNearbyCities();
    updateClock();
    setInterval(updateClock, 1000);
});
