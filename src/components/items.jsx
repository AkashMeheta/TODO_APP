import styles from "../css/items.module.css";
import { MdDeleteForever } from "react-icons/md";

function Item({ task, time, completing, pause, handelDoneButton, handelCompleteButton, handelPauseButton, handelDeleteButton }) {
    console.log("pause", pause)
    console.log("completeing", completing)
    return (
        <>
            <div className={`row  ${styles.itemsDiv} ${pause && `${styles.pause}`} ${completing && `${styles.working}`}`}>
                <div className={`${styles.taskName}  col-sm-4`} id="taskName"><p>{task}</p></div>
                <div className={`${styles.taskName}  col-sm-4`} id="taskTime"><p>{time}</p></div>
                <div className={`${styles.actions}  col-sm-4`} id="taskTime">
                    <button id={`${task}--${time}`} className={`${styles.buttonField} btn btn-warning`} onClick={handelCompleteButton}>Completing</button>
                    <button id={`done--${task}--${time}`} className={`${styles.buttonField} btn btn-success`} onClick={()=>handelDoneButton(task)}>DONE</button>
                    <button className={`${styles.buttonField} btn btn-danger`} onClick={()=>handelDeleteButton(task, time)}><MdDeleteForever /></button>
                </div>
            </div>
        </>
    )
}

export default Item;
{/* <button className={`${styles.buttonField} btn btn-info`} onClick={handelPauseButton}>Hold</button> */}