import React, { useState, useContext } from "react";
import styles from "./LoginForm.module.css";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  x: {
    setIslogin: (x: any) => void;
    isLogin: boolean;
  };
}

const LoginForm: React.FC<LoginFormProps> = ({ x }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const credentials = `${formData.email}:${formData.password}`;
    const encodedCredentials = btoa(credentials);
    axios
      .post(
        `https://opensooq-web-api.onrender.com/user/login`,
        {},
        {
          headers: {
            authorization: `Basic ${encodedCredentials}`,
          },
        }
      )
      .then((resovle) => {
        delete resovle.data.password;
        delete resovle.data.id;
        let data = JSON.stringify(resovle.data);
        localStorage.setItem("user", data);
        setUser(resovle.data);
        navigate("/");
      })
      .catch((reject) => {
        alert(reject.response.data);
      });
  };

  return (
    <div className={styles.registerContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        If you dont have an accound{" "}
        <span
          onClick={() => {
            x.setIslogin(false);
          }}
          style={{ color: "rgb(0,123,255)", cursor: "pointer" }}
        >
          signup
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
