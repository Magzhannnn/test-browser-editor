import React from "react";
import styles from "./MyText.module.css";

interface MyTextProps {
  text: string;
}

const MyText: React.FC<MyTextProps> = ({ text }) => {
  return <div className={styles.text}>{text}</div>;
};

export default MyText;
