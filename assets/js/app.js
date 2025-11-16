/* ---------------- DEFAULT WEATHER ---------------- */

let defaultWeather = "Default";

const videoBackground = document.getElementById("video-background");

/* ---------------- LOCAL VIDEO MAP ---------------- */

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

/* ---------------- CHANGE BACKGROUND ---------------- */

function changeBackground(condition) {
    const videoUrl = localVideoMap[condition] || localVideoMap["Default"];
    videoBackground.src = videoUrl;
    videoBackground.load();
    videoBackground.play();
}

/* ---------------- WEATHER MOCK DATA ---------------- */

let currentWeatherData = {
    city: "Kaluthara, Sri Lanka",
    weather: "",
    temp: 28,
    description: "Overcast skies with a brisk breeze.",
    metrics: {
        Humidity: { value: "78%", icon: "fa-tint" },
        Precipitation: { value: "0.2 mm", icon: "fa-cloud-rain" },
        "Wind Speed": { value: "15 km/h", icon: "fa-wind" },
        "Air Pressure": { value: "1008 hPa", icon: "fa-gauge-high" },
        "Cloud Cover": { value: "90%", icon: "fa-cloud" },
        "UV Index": { value: "1 (Low)", icon: "fa-sun-haze" },
        Sunrise: { value: "07:35 AM", icon: "fa-sunrise" },
        Sunset: { value: "04:15 PM", icon: "fa-sunset" }
    }
};

/* ---------------- UPDATE MAIN WEATHER PANEL ---------------- */

function updateMainWeather() {
    document.getElementById("city-name").textContent = currentWeatherData.city;

    document.getElementById("weather-description").textContent =
        currentWeatherData.description;

    document.getElementById("weather-condition").textContent =
        currentWeatherData.weather;

    document.getElementById("main-temp").textContent = currentWeatherData.temp;

    // Icon (default for now)
    document.getElementById("weather-icon").className = "fa-solid fa-cloud";

    // Atmospheric Metrics
    const metricsContainer = document.getElementById("detailed-metrics");
    metricsContainer.innerHTML = "";

    Object.entries(currentWeatherData.metrics).forEach(([name, data]) => {
        metricsContainer.innerHTML += `
            <p>
                <i class="fa ${data.icon}"></i>
                <strong>${name}:</strong> ${data.value}
            </p>
        `;
    });

    changeBackground(currentWeatherData.weather);
}

/* ---------------- LIVE CLOCK ---------------- */

function updateClock() {
    const now = new Date();

    const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("current-time").textContent = timeString;
}

/* ---------------- PAGE LOAD ---------------- */

window.addEventListener("load", () => {
    changeBackground(defaultWeather); 
    updateMainWeather();             
    updateClock();                    
    setInterval(updateClock, 1000);   
});
