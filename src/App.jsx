import { InputSection } from "./components/inputSection";
import ItemCard from "./components/container";
import AddItem from "./components/addItem";
import { ItemContext } from "./store/itemContext";
import Heading from "./components/heading";
import { EnjoyMsg } from "./components/enojyMsg";

import { useState } from "react";

import styles from "./css/App.module.css";
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
      <ItemContext.Provider value={{ item, handelDoneButton, handleInput}}>
        <center className={styles.container}>
          <ItemCard>
            <Heading></Heading>
            <InputSection/>
            <EnjoyMsg></EnjoyMsg>
            <AddItem></AddItem>
          </ItemCard>
        </center>
      </ItemContext.Provider>
    </>
  );
}

export default App;
