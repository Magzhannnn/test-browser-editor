import React from "react";
import Editor from "../../components/Editor/Editor";
import TaskText from "../../components/TaskText/TaskText";
import Terminal from "../../components/Terminal/Terminal";
import Container from "../../UI/Container/Container";
import styles from "./MainPage.module.css"

const MainPage = () => {
  return (
    <Container>
      <div className={styles.info}>
        <TaskText />
        <div className={styles.code_editor}>
          <Terminal />
          <Editor />
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
