let weather = {
    "apikey":"be6ff159238a95dbe8b90e6e67764347",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=be6ff159238a95dbe8b90e6e67764347"
        ).then((response)=> response.json())
        .then((data) => this.displayweather(data));
    },
    displayweather: function(data) {
        const {name} = data;
        const {icon, description } = data.weather[0];
        const {temp, humidity } = data.main;
        const {speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector("city").innerText = "weather in " + name;
        document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
       search: function () {
       this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Denver");

    


