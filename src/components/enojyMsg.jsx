import { useContext } from "react";
import { ItemContext } from "../store/itemContext";
import styles from "../css/enjoyMsg.module.css";
export const EnjoyMsg = () =>{

    const itemContextStore = useContext(ItemContext);
    const item = itemContextStore.item;

    return (
        <>
            {(item.length == 0) && <p className={styles.welcome}> All Task Done Now Enjoy Your Day </p>}
        </>
    )
}