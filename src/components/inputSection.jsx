import { useState } from "react";
import styles from "../css/inputSection.module.css";

export function InputSection({ handleInput }) {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handelTaskName = (event) => {
    setTaskName(event.target.value);
  };

  const handelTaskDate = (event) => {
    setTaskDate(event.target.value);
  };

  const handelSubmitButton = () => {
    handleInput(taskName, taskDate);
    setTaskDate("");
    setTaskName("");
  };

  return (
    <>
      <div className="row">
        <div className={`col-sm-4 ${styles.inputDiv}`}>
          <input
            type="text"
            className={styles.inputSection}
            id="taskName"
            placeholder="Enter Your Task"
            value={taskName}
            onChange={handelTaskName}
          />
        </div>
        <div className={`col-sm-4 ${styles.inputDiv}`}>
          <input
            type="time"
            className={styles.inputSection}
            id="taskTime"
            placeholder="Enter Straing Time"
            value={taskDate}
            onChange={handelTaskDate}
          />
        </div>
        <div className="col-sm-4">
          <button
            className={`${styles.buttonField} btn btn-success`}
            onClick={handelSubmitButton}
          >
            ADD TASK
          </button>
        </div>
      </div>
    </>
  );
}
