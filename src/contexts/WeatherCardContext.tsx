import React, { createContext, useState } from "react";

interface WeatherData {
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
}

interface WeatherCardContextType {
  weatherData: WeatherData | null | boolean | any;
  setWeatherData: (data: WeatherData | null) => void;
  loadingData: boolean;
  setLoadingData: (boolean: boolean) => void;
}

const WeatherCardContext = createContext<WeatherCardContextType>({
  weatherData: null,
  setWeatherData: () => {},
  loadingData: false,
  setLoadingData: () => {},
});

interface WeatherCardProviderProps {
  children: React.ReactNode;
}

const WeatherCardProvider: React.FC<WeatherCardProviderProps> = ({
  children,
}) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loadingData, setLoadingData] = useState<boolean>(false);

  return (
    <WeatherCardContext.Provider
      value={{ weatherData, setWeatherData, loadingData, setLoadingData }}
    >
      {children}
    </WeatherCardContext.Provider>
  );
};

export { WeatherCardContext, WeatherCardProvider };
