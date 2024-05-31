import React, { useContext } from 'react';
import styles from "../css/inputSection.module.css";
import { ItemContext } from "../store/itemContext";

const SortComponent = () => {
    const { item, setItem } = useContext(ItemContext);

    const handelSorting = (e) => {
        const value = e.target.value;
        if(value == "none"){
            return;
        }
        if (!Array.isArray(item)) {
            console.error("Items is not an array or is undefined");
            return;
        }
        const sortedItems = [...item].sort((a, b) => a.priorty - b.priorty);
        setItem(sortedItems);
    }

    return (
        <div className={`${styles.sortbtn} ${styles.inputDiv}`}>
            <select name="sort" id="sort" onChange={handelSorting}>
                <option value="none" >Sort By</option>
                <option value="sort" >By Priority</option>
            </select>
        </div>
    );
}

export default SortComponent;
