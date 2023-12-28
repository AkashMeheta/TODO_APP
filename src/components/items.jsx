import styles from "../css/items.module.css";

function Item({ task, time, completing, handelDoneButton, handelCompleteButton }) {
    
    return (
        <>
            <li className="row active">
                <div className={`${styles.taskName} working col-sm-4`} id="taskName"><p className="working">{task}</p></div>
                <div className={`${styles.taskName}  col-sm-4`} id="taskTime"><p>{time}</p></div>
                <div className={`${styles.actions}  col-sm-4`} id="taskTime">
                    <button className={`${styles.buttonField} btn btn-warning`} onClick={handelCompleteButton}>Completing</button>
                    <button className={`${styles.buttonField} btn btn-info`} onClick={()=>handelDoneButton(task)}>DONE</button>
                </div>
            </li>
        </>
    )
}

export default Item;