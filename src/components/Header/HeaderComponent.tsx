import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function HeaderComponent() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div><span>open</span><span>sooq</span></div>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/favorite">Favorite</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
