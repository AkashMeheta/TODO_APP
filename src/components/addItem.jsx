import { useState } from "react";
import Item from "./items";
function AddItem({ item, handelDoneButton }) {

  const [ active, setActive ] = useState([]);

  const handelCompleteButton = (task) => {
    const activeItem = [...active, task];
    setActive(activeItem);
  }

  return (
    <>
      {item.map((items) => (
        <Item 
        key={items.task} 
        task={items.task} 
        time={items.time}
        completing={active.includes(items.task)}
        handelDoneButton = {handelDoneButton}
        handelCompleteButton = {()=>handelCompleteButton(items.task)}
        ></Item>
      ))}
    </>
  );
}

export default AddItem;
