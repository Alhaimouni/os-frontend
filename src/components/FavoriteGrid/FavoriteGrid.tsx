import React, { useContext } from "react";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import styles from "./FavoriteGrid.module.css";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

interface Fav {
  comment: string;
  date: string;
  owner: string;
  visibility: number;
  weather: string;
  id: number;
}

interface FavoriteGridProps {
  favorites: Fav[];
  setRel: (st: number) => void;
}

const FavoriteGrid: React.FC<FavoriteGridProps> = ({ favorites, setRel }) => {
  const { user } = useContext(UserContext);
  function onDeleteFavorite(id: number) {
    console.log(user.role);
    let url: string;
    if (user.role == "admin") {
      url = `https://opensooq-web-api.onrender.com/weather/fav/admin/${id}`;
    } else {
      url = `https://opensooq-web-api.onrender.com/weather/fav/${id}`;
    }
    axios
      .delete(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setRel(Math.random() * 10000000);
      })
      .catch((rej) => {});
  }
  return (
    <div className={styles.grid}>
      {favorites.map((favorite) => (
        <FavoriteCard
          key={favorite.id}
          id={favorite.id}
          weatherDescription={favorite.weather}
          visibility={favorite.visibility}
          addedDate={favorite.date}
          onDelete={onDeleteFavorite}
        />
      ))}
    </div>
  );
};

export default FavoriteGrid;
