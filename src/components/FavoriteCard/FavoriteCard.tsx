import React from "react";
import styles from "./FavoriteCard.module.css";

interface FavoriteCardProps {
  weatherDescription: string;
  visibility: number;
  addedDate: string;
  id: number;
  onDelete: (id: number) => void;
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({
  weatherDescription,
  visibility,
  addedDate,
  id,
  onDelete,
}) => {
  return (
    <div className={styles.card}>
      <div>
        <h3>{weatherDescription}</h3>
        <p>Visibility: {visibility} meters</p>
        <p>Added Date: {addedDate}</p>
      </div>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default FavoriteCard;
