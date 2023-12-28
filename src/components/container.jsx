import styles from "../css/container.module.css";

function ItemCard({ children }){
    return <div className={styles.cards}>{children}</div>
}

export default ItemCard;