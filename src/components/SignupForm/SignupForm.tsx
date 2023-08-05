import React, { useState } from "react";
import styles from "./SignupForm.module.css";
import axios from "axios";


interface SignupFormProps {
  x: {
    setIslogin: (x: any) => void;
    isLogin: boolean;
  };
}

const SignupForm: React.FC<SignupFormProps> = ({ x }) => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.target);
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
      axios
        .post(`https://opensooq-web-api.onrender.com/user/signup`, {
          email: formData.email,
          password: formData.password,
        })
        .then((resolve) => {
          x.setIslogin(true)
        });
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h2>Signup</h2>
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
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {!passwordsMatch && (
          <p className={styles.errorMsg}>Passwords do not match</p>
        )}
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an accound{" "}
        <span
          onClick={() => {
            x.setIslogin(!x.isLogin);
          }}
          style={{ color: "rgb(0,123,255)", cursor: "pointer" }}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default SignupForm;
