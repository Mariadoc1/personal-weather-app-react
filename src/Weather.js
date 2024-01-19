import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function handleRequest(response) {
    let { main, weather, wind } = response.data;
    setTemperature(main.temp);
    setDescription(weather[0].description);
    setHumidity(main.humidity);
    setWind(wind.speed);
    setIcon(`https://openweathermap.org/img/w/${weather[0].icon}.png`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length !== 0) {
      let apiKey = "7odb1604cd5806418921397fa0t4e3ac";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric&appid=${apiKey}`;
      axios.get(url).then(handleRequest);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setCity(event.target.value)}
          type="text"
          placeholder="Enter a city..."
          autoFocus={true}
          className="search-form-input"
        />
        <input type="submit" value="Search" className="button" />
      </form>
      {temperature !== null && (
        <ul>
          <li>
            <strong>Temperature:</strong> {Math.round(temperature)}˚C
          </li>
          <li>
            <strong>Description:</strong> {description}
          </li>
          <li>
            <strong>Humidity:</strong> {humidity} %
          </li>
          <li>
            <strong>Wind: </strong>
            {wind} km/h
          </li>
          <li>
            <img alt="emoji" src={icon} className="icon" />
          </li>
        </ul>
      )}
    </div>
  );
}
