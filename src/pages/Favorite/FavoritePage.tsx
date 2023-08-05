import React, { useContext, useEffect, useState } from "react";
import styles from "./FavoritePage.module.css";
import FavoriteGrid from "../../components/FavoriteGrid/FavoriteGrid";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import Loading from "../../components/Loading/Loading";
import { When } from "react-if";

const FavoritePage: React.FC = () => {
  interface Fav {
    comment: string;
    date: string;
    owner: string;
    visibility: number;
    weather: string;
    id: number;
  }

  const { user } = useContext(UserContext);
  const [allFavs, setAllFavs] = useState<Fav[]>([]);
  const [rel, setRel] = useState<number>(0);
  const [isLoading, setisLoading] = useState<number>(0);
  useEffect(() => {
    setisLoading(1);
    axios
      .get(`https://opensooq-web-api.onrender.com/weather/fav`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setAllFavs(res.data);
        setisLoading(0);
      })
      .catch((rej) => {
        console.log(rej.data);
      });
  }, [rel]);
  return (
    <div className={styles.main}>
      <When condition={isLoading} children={<Loading />} />
      <When
        condition={!isLoading}
        children={<FavoriteGrid favorites={allFavs} setRel={setRel} />}
      />
    </div>
  );
};

export default FavoritePage;
