import React, { useState } from "react";
import styles from "./Terminal.module.css";
import Sk from "skulpt";
import MyButton from "../../UI/MyButton/MyButton";

const Terminal = () => {
  const [code, setCode] = useState<string>("print('Hello World!')");

  const outf = (text) => {
    var mypre = document.getElementById("output");
    mypre.innerHTML = mypre.innerHTML + text;
  };

  const builtinRead = (x) => {
    if (
      Sk.builtinFiles === undefined ||
      Sk.builtinFiles["files"][x] === undefined
    )
      throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
  };

  const runProg = (e: Event) => {
    e.preventDefault();

    let d = "";

    const prog = code;
    const mypre = document.getElementById("output");

    mypre.innerHTML = "";

    Sk.pre = "output";
    Sk.configure({ output: outf, read: builtinRead });

    const myPromise = Sk.misceval.asyncToPromise(function () {
      return Sk.importMainWithBody("<stdin>", false, prog, true);
    });

    myPromise
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log("data");
        const errString = err.toString();
        mypre.innerText += errString;
        // console.log(errString);
      });
  };

  const restartProg = (e: Event) => {
    e.preventDefault();

    setCode("print('Hello World!')");

    const mypre = document.getElementById("output");
    mypre.innerHTML = "";
  };

  const handleTab = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Tab") {
      event.preventDefault();

      const { selectionStart, selectionEnd } = event.currentTarget;
      const newCode =
        code.substring(0, selectionStart) + "\t" + code.substring(selectionEnd);

      setCode(newCode);

      // Перемещаем каретку после вставленного символа табуляции
      event.currentTarget.selectionStart = event.currentTarget.selectionEnd =
        selectionStart + 1;
    }
  };

  return (
    <form className={styles.form}>
      <textarea
        id="yourcode"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={handleTab}
        className={styles.text_input}
      />
      <br />
      <div className={styles.btns}>
        <MyButton title="Run" classNameStr="green_btn" clickHandler={runProg} />
        <MyButton
          title="Restart"
          classNameStr="red_btn"
          clickHandler={restartProg}
        />
      </div>
    </form>
  );
};

export default Terminal;
