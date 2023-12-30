import { useContext, useState } from "react";
import Item from "./items";

import { ItemContext } from "../store/itemContext";

function AddItem() {

  const itemContextStore = useContext(ItemContext);
  const item = itemContextStore.item;
  const handelDoneButton1 = itemContextStore.handelDoneButton;

  const [ active, setActive ] = useState([]);
  const [ pauseTask, setPauseTask ] = useState([]);

  const handelCompleteButton = (task) => {
    const activeItem = [...active, task];
    setActive(activeItem);
  }
  
  const handelPauseButton = (task) => {
    const pauseItem = [...pauseTask, task ];
    setPauseTask(pauseItem); 
  }

  return (
    <>
      {item.map((items) => (
        <Item 
        key={items.task} 
        task={items.task} 
        time={items.time}
        completing={active.includes(items.task)}
        pause={pauseTask.includes(items.task)}
        handelDoneButton = {handelDoneButton1}
        handelPauseButton = {() => handelPauseButton(items.task)}
        handelCompleteButton = {()=>handelCompleteButton(items.task)}
        ></Item>
      ))}
    </>
  );
}

export default AddItem;
