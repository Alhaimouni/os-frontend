import React, { useContext } from "react";
import styles from "./WeatherCard.module.css";
import { When } from "react-if";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";

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
  const { user } = useContext(UserContext);

  return (
    <div className={styles.card}>
      <h2 style={{ textAlign: "left" }}>Weather Details</h2>
      <p>Location: {weatherData.name}</p>
      <p>Description: {weatherData.weather[0].description}</p>
      <p>Temperature: {weatherData.main.temp} °F</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <When
        condition={user}
        children={
          <button
            onClick={() => {
              axios
                .post(
                  `https://opensooq-web-api.onrender.com/weather/fav`,
                  {
                    weather: weatherData.weather[0].description,
                    visibility: weatherData.main.humidity,
                  },
                  {
                    headers: {
                      authorization: `Bearer ${user.token}`,
                    },
                  }
                )
                .then((resolve) => {
                  console.log(resolve.data);
                })
                .catch((reject) => {
                  console.log(reject);
                });
            }}
          >
            Add To Favorate
          </button>
        }
      />
    </div>
  );
};

export default WeatherCard;
