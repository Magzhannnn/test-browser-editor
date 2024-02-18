import React from "react";
import styles from "./MyTitle.module.css"

interface MyTitleProps {
  title: string;
}

const MyTitle: React.FC<MyTitleProps> = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default MyTitle;
