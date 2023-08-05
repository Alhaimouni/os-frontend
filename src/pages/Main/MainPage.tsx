import React, { useContext, useState } from "react";
import styles from "./MainPage.module.css";
import LocationForm from "../../components/LocationForm/LocationForm";
import { When } from "react-if";
import { WeatherCardContext } from "../../contexts/WeatherCardContext";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Loading from "../../components/Loading/Loading";

const MainPage: React.FC = () => {
  const [data, setData] = useState<number>(0);
  const { weatherData, loadingData } = useContext(WeatherCardContext);
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h3>
          Welcome! Please enter the coordinates of the location to get its
          weather forecast.
        </h3>
        <LocationForm />
        <When condition={loadingData} children={<Loading />} />
        <When
          condition={weatherData ? 1 : 0}
          children={<WeatherCard weatherData={weatherData} />}
        />
        <When condition={!weatherData} children={<p></p>} />
      </div>
    </main>
  );
};

export default MainPage;
