
import { NavLink } from 'react-router-dom';
import profileImage from "../../assets/png/samantha.png";
import styles from "./sidebar.module.scss";


const sidebarNavLinks = ["dashboard", "expenses", "wallets", "summary", "accounts", "settings"];

const Sidebar = () => {

   
 

    return <>
       
        <aside className={styles.sidebar} >
            <div className={styles.sidebarContent}>
                <div className={styles.profileDetails}>
                    <div className={styles.profileImageDiv}>
                        <img src={profileImage} alt="profileImage" />
                        <p className={styles.notifications}>4</p>
          
                    </div>
                    <p className={styles.userName}>semanta</p>
                    <p className={styles.userEmail}>semanta@gmail.com</p>
                </div>
                <nav className={styles.sidebarNav}>
                    <ul>
                        {sidebarNavLinks.map(navLinkItem => (
    
                             <li key={navLinkItem} className={styles.sidebarNavItem}>
                                <NavLink to={`/${navLinkItem}`} className={({ isActive }) =>[styles.navlinkItemLink,isActive ? styles.sidebarNavLinkActive : styles.sidebarNavLink].join(" ") }>
   {navLinkItem} 

                                 
                                </NavLink>
                        </li>
))}



                       
                    </ul>
                </nav>
            </div>  
    </aside>
    
    </>;
};

export default Sidebar;
