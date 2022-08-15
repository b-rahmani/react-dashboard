import styles from "./MoneyOveriewItem.module.scss";


const MoneyOverviewItem = (props:any) => {

const {itemData}=props;
    return (
       <li>
                                <div className={styles.moneyItemDetails} >
                                    <p>{itemData.title}</p>

                                        <p>{ itemData.price.toLocaleString(undefined,{minimumFractionDigits:3})}</p>
                                </div>
                                <div className={styles.moneyItemProgress}>
                                    <div className={styles.colorBar} style={{width:props.width+"%"}}>
                                    </div>

                                </div>
                            </li>
  )
};

export default MoneyOverviewItem;
