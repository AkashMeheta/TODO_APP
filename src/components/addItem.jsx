import { useContext, useState } from "react";
import Item from "./items";

import { ItemContext } from "../store/itemContext";

function AddItem() {
  
  const itemContextStore = useContext(ItemContext);
  const item = itemContextStore.item;
  const handelDeleteButton1 = itemContextStore.handelDeleteButton;

  const [ active, setActive ] = useState([]);
  const [ pauseTask, setPauseTask ] = useState([]);

  const handelCompleteButton = (items) => {
    setActive([...active, items.id]);
  }
  
  const handelDoneButton = (items) => {
    const btn = document.getElementById(`${items.task}--${items.time}`)
    if(btn){
      btn.remove();
    }
    setPauseTask([...pauseTask, items.id ]);
  }
  
  return (
    <>
      {item.map((items) => (
        <Item 
        key={items.id} 
        task={items.task} 
        time={items.time}
        completing={active.includes(items.id)}
        pause={pauseTask.includes(items.id)}
        handelDeleteButton = {handelDeleteButton1}
        handelDoneButton = {() => handelDoneButton(items)}
        handelCompleteButton = {()=>handelCompleteButton(items)}
        ></Item>
      ))}
    </>
  );
}

export default AddItem;
