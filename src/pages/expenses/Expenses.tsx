import { useContext } from "react";

import styles from "./expenses.module.scss";
import person1 from "../../assets/png/person1.png";
import person2 from "../../assets/png/person2.png";
import person3 from "../../assets/png/person3.png";
import addIcon from "../../assets/png/addIcon.png";
import ExpensesChart from "../../components/expensesChart/ExpensesChart";

import ExpensesItem from "../../components/expensesItem/expensesItem";
import cartIcon from "../../assets/svg/cartIcon.svg";
import bus from "../../assets/svg/transportIcon.svg";
import house from "../../assets/svg/houseIcon.svg";
import food from "../../assets/svg/houseIcon.svg";
import play from "../../assets/svg/houseIcon.svg";
import plant from "../../assets/png/plant.png"
import boxes from "../../assets/png/boxes.png"
import ExpensesOverviewHeader from "../../components/ExpensesOverviewHeader/ExpensesOverviewHeader";

import MoneyOverviewItem from "../../components/MoneyOverViewItem/MoneyOverviewItem";
import { AppDataContext } from "../../context/AppDataContext";

const data = [{ title: "Grocery", icon: cartIcon, iconbg: "#32A7E2", time: "5:12 pm  •  Belanja di pasar", price: -326.800 ,type:"today"},
    { title: "Transportation", icon: bus, iconbg: "#B548C6", time: "5:12 pm  •  Naik bus umum", price: -15.000,type:"today" },
    { title: "Housing", icon: house, iconbg: "#FF8700", time: "5:12 pm  •  Bayar Listrik", price: -185.750, type: "today" },
    { title: "Food and Drink", icon: food, iconbg: "#DC3434", time: "5:12 pm  •  Makan Steak", price: -156.000, type: "monday" },
    { title: "Entertainment", icon: play, iconbg: "#4BA83D", time: "5:12 pm  •  Nonton Bioskop", price: -35.200, type: "monday" }



]

const moneyDetails = [
    {id:1,title:"Food and Drinks",price:972.400,persentage:"30%"},
    {id:2,title:"Shopping",price:1378.200,persentage:"40%"},
    {id:3,title:"Housing",price:972.400,persentage:"35%"},
    {id:4,title:"Transportation",price:420.700,persentage:"25%"},
    {id:5,title:"Vehicle",price:520.000,persentage:"35%"}
]


const Expenses = () => {
    
    const [_, setData] = useContext(AppDataContext);
    return (
        <>
            <main className={styles.expenses}>
                <div className={styles.expensesCard}>
                    <section className={styles.expensesOverview}>
                        <div className={styles.expensesHeader}>
                            <p className={styles.expensesTitle}>
                               <span onClick={()=>setData({type:"drawerFlag"})}></span> Expenses
                            </p>
                            <div className={styles.expensesActions}>
                                <div className={styles.personImages}>
                                    <img src={person1} alt="persos1" />
                                    <img src={person2} alt="persos2" />
                                    <img src={person3} alt="persos3" />
                                </div>
                                <button>
                                  <img src={addIcon} alt="addIcon" />  
                                </button>
                            </div>
                        </div> 
                        <p className={styles.dateRange}>01- 25 march , 2020</p>
                        <ExpensesChart />
                      <ExpensesOverviewHeader title="Today"/>
                        <ul>
                            {data.filter((el: { type: string; }) => el.type === "today").map((item: { title: any; }) => (
                                <ExpensesItem data={item} key={ item.title}/>
                            ))}
                           
                        </ul>
                        <ExpensesOverviewHeader title="Monday, 23 March 2020" />
                         <ul>
                            {data.filter((el: { type: string; }) => el.type !== "today").map((item: { title: any; }) => (
                                <ExpensesItem data={item} key={ item.title}/>
                            ))}
                           
                        </ul>
                    </section>
                    <section className={styles.moneyOverview}>
                        <p className={styles.moneyOverviewTitle}>
                            Where your money go?
                        </p>
                        <ul>
                            {moneyDetails.map(data => (
                                
                                <MoneyOverviewItem itemData={data} key={data.id} width={data.price/moneyDetails.reduce((acc,current)=>acc+current.price,0)*100} />
                            ))}
                          
                        </ul>
                        <div className={styles.saveMoneyDiv}>
                            <div className={styles.saveMoneyImages}>
                                <img src={boxes} alt="boxes" />
                                <img src={plant} alt="plant" />
                            </div>
                            <div className={styles.saveMoneyContent}>
                                <p>Save More Money</p>
                                <span>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</span>
                            </div>
                            <button>VIEW TIPS</button>
                        </div>
                    </section>
                </div>
        </main>
        </>
  )
};


export default Expenses;


