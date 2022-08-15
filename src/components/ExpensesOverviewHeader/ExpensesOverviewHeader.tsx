import styles from "./ExpensesOverviewHeader.module.scss";
import threeDot from "../../assets/png/menuIcon.png"


const ExpensesOverviewHeader = (props:any) => {
    
    return (
 <div className={styles.expensesOverviewHeader}>
            <p className={styles.expensesOverviewTitle}>{props.title}</p>
                            <button className={styles.expensesOverviewButton}>
                                <img src={threeDot} alt="three" />
                            </button>
                        </div>
        )
};

export default ExpensesOverviewHeader;
