import { useContext, useRef, useState } from "react";
import styles from "../css/inputSection.module.css";
import { ItemContext } from "../store/itemContext";

export function InputSection() {

  const itemContext = useContext(ItemContext);
  const inputHandeling = itemContext.handleInput;

  const taskNameRef = useRef();
  const taskDateRef = useRef();


  const handelSubmitButton = (event) => {
    const taskName = taskNameRef.current.value;
    const taskDate = taskDateRef.current.value;
    inputHandeling(taskName, taskDate);
    event.preventDefault();
  };

  return (
    <>
      <form className={`row ${styles.inputParentDiv}`} onSubmit={handelSubmitButton}>
        <div className={`col-sm-4 ${styles.inputDiv}`}>
          <input
            type="text"
            className={styles.inputSection}
            ref={taskNameRef}
            id="taskName"
            placeholder="Enter Your Task"
            
          />
        </div>
        <div className={`col-sm-4 ${styles.inputDiv}`}>
          <input
            type="time"
            className={styles.inputSection}
            ref={taskDateRef}
            id="taskTime"
            placeholder="Enter Straing Time"
            
          />
        </div>
        <div className="col-sm-4">
          <button
            className={`${styles.buttonField} btn btn-primary`}
            
          >
            ADD TASK
          </button>
        </div>
      </form>
    </>
  );
}
