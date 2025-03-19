document.getElementById("search-btn").addEventListener("click", getWeather);

async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) return alert("Please enter a city name.");

    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found. Please try again.");
            return;
        }

        // Update the weather information on the page
        document.getElementById("city-name").textContent = data.name;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp} °C`;
        document.getElementById("description").textContent = `Description: ${data.weather[0].description}`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind-speed").textContent = `Wind Speed: ${data.wind.speed} m/s`;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Something went wrong. Please try again later.");
    }
}
