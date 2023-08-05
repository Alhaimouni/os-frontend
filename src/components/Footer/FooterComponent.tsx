import React from "react";
import styles from "./Footer.module.css";

const FooterComponent: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {2023} Mohammad Al-Haimouni</p>
    </footer>
  );
};

export default FooterComponent;
