import React, { useContext, useState } from "react";
import styles from "./LocationForm.module.css";
import axios from "axios";
import { WeatherCardContext } from "../../contexts/WeatherCardContext";

const LocationForm: React.FC = () => {
  const [longitude, setLongitude] = useState<number>(0);
  const [latitude, setLatitude] = useState<number>(0);
  const { setWeatherData, loadingData, setLoadingData } =
    useContext(WeatherCardContext);

  const handleLongitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= -180 && value <= 180) {
      setLongitude(value);
    }
  };

  const handleLatitudeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= -90 && value <= 90) {
      setLatitude(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingData(true);
    setWeatherData(null);
    axios
      .get(
        // `https://opensooq-web-api.onrender.com/weather?lon=${longitude}&lat=${latitude}`,
        `http://localhost:3004/weather?lon=${longitude}&lat=${latitude}`,
        {
          // headers: {
          //   //admin token just incase if we want to make the authorized user to get the data
          //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY5MTE4MTk4MX0.nit4mdsP3DsJCWVTda9CE0QWuxbiA57uzpClKAgoHDA`,
          // },
        }
      )
      .then((response) => {
        setLoadingData(false);
        setWeatherData(response.data);
        console.log("API Response:", response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="longitude">Longitude:</label>
        <input
          type="number"
          id="longitude"
          value={longitude}
          onChange={handleLongitudeChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="latitude">Latitude:</label>
        <input
          type="number"
          id="latitude"
          value={latitude}
          onChange={handleLatitudeChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LocationForm;
