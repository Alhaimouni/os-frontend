import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { UserContext } from "../../contexts/UserContext";
import { When } from "react-if";

function HeaderComponent() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div>
          <span>open</span>
          <span>sooq</span>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <When
                condition={user}
                children={
                  <li>
                    <NavLink to="/favorite">Favorite</NavLink>
                  </li>
                }
              />
              <When
                condition={!user}
                children={
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                }
              />
              <When
                condition={user}
                children={
                  <li
                    onClick={() => {
                      localStorage.clear();
                      navigate("/register");
                      // window.location.reload();
                    }}
                  >
                    <p>Logout</p>
                  </li>
                }
              />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
