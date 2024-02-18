import React from "react";
import MyText from "../../UI/MyText/MyText";
import MyTitle from "../../UI/MyTitle/MyTitle";
import styles from "./TaskText.module.css";

const TaskText = () => {
  const text = `Даны списки:
  a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];\n
  b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].\n
  Нужно вернуть список, который состоит из элементов, общих для этих двух списков.`;

  return (
    <div className={styles.size}>
      <MyTitle title="Задача" />
      <MyText text={text} />
    </div>
  );
};

export default TaskText;
