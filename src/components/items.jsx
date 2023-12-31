import styles from "../css/items.module.css";

function Item({ task, time, completing, pause, handelDoneButton, handelCompleteButton, handelPauseButton }) {
    
    return (
        <>
            <div className={`row  ${styles.itemsDiv} ${pause && `${styles.pause}`} ${completing && `${styles.working}`}`}>
                <div className={`${styles.taskName}  col-sm-4`} id="taskName"><p>{task}</p></div>
                <div className={`${styles.taskName}  col-sm-4`} id="taskTime"><p>{time}</p></div>
                <div className={`${styles.actions}  col-sm-4`} id="taskTime">
                    <button className={`${styles.buttonField} btn btn-warning`} onClick={handelCompleteButton}>Completing</button>
                    <button className={`${styles.buttonField} btn btn-danger`} onClick={handelPauseButton}>Hold</button>
                    <button className={`${styles.buttonField} btn btn-success`} onClick={()=>handelDoneButton(task)}>DONE</button>
                </div>
            </div>
        </>
    )
}

export default Item;