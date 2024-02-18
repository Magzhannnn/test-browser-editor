import React from "react";
import styles from "./MyButton.module.css";

interface MyButtonProps {
  title: string;
  classNameStr: string;
  clickHandler: () => void;
}

const MyButton: REact.FC<MyButtonProps> = ({
  title,
  classNameStr,
  clickHandler,
}) => {
  return (
    <button onClick={clickHandler} className={styles[classNameStr]}>
      {title}
    </button>
  );
};

export default MyButton;
