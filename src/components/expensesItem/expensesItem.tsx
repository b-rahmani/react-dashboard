import styles from "./expensesItem.module.scss";



const ExpensesItem = (props:any) => {

    const {
data    
    }=props
    return (
      <li className={styles.expensesItem}>
                                <div className={styles.expensesItemLeft}>
                                    <div className={styles.exoensesItemDiv} style={{backgroundColor:data.iconbg}} >
                                        <img src={data.icon} alt="cartIcon" />
                                    </div>
                                    <div className={styles.expensesItemDetails}>
                    <p className={styles.expensesItemTitle}>{data.title}</p>
                    <p className={styles.expensesItemTime}>{ data.time}</p>
                                    </div>
                                </div>
            <div className={styles.expensesItemPrice}>{ data.price.toFixed(3)}</div>
                            </li>
  )
};

export default ExpensesItem;
