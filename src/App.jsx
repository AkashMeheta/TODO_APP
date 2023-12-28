
import { InputSection } from "./components/inputSection";
import styles from "./css/App.module.css";
import ItemCard from "./components/container";
import AddItem from "./components/addItem";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {

  const [ item, setItem ] = useState([]);

  const handleInput = (taskName, taskTime) => {
    let tempObj = {
      task: taskName,
      time: taskTime,
    }

    let newArr = [...item, tempObj];
    setItem(newArr);

    };

  const handelDoneButton = (task) => {
    const newArr = item.filter((item) => item.task != task);
    setItem(newArr);
  }

  return (
    <>
      <center className={styles.container}>
        <ItemCard>
          <h1>TODO list</h1>
          <p>Discipline Is The Key Of Success in LIFE</p>
          
          <InputSection handleInput={handleInput} />

          {(item.length == 0) && <p className={styles.welcome}> All Task Done Now Enjoy Your Day </p>}

          <AddItem item={item} handelDoneButton = {handelDoneButton} ></AddItem>
        </ItemCard>
      </center>
    </>
  );
}

export default App;
