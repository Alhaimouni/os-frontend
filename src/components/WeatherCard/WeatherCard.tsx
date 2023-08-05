import React, { useContext } from "react";
import styles from "./WeatherCard.module.css";
import { WeatherCardContext } from "../../contexts/WeatherCardContext";

interface WeatherCardProps {
  weatherData: {
    coord: { lon: number; lat: number };
    weather: { id: number; main: string; description: string; icon: string }[];
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level: number;
      grnd_level: number;
    };
    visibility: number;
    wind: { speed: number; deg: number; gust: number };
    clouds: { all: number };
    dt: number;
    sys: { sunrise: number; sunset: number };
    timezone: number;
    id: number;
    name: string;
    cod: number;
  };
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  const {} = useContext(WeatherCardContext);

  return (
    <div className={styles.card}>
      <h2>Weather Details</h2>
      <p>Location: {weatherData.name}</p>
      <p>Description: {weatherData.weather[0].description}</p>
      <p>Temperature: {weatherData.main.temp} °F</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
