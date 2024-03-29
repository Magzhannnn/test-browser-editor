import React, { ReactElement } from "react";
import styles from "./Container.module.css"

interface IContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
