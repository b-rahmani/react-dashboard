import { NavLink } from "react-router-dom";
import profileImage from "../../assets/png/samantha.png";
import styles from "./sidebar.module.scss";
import { useContext } from "react";
import { AppDataContext } from "../../context/AppDataContext";
import Backdrop from "../Backdrop/Backdrop";

const sidebarNavLinks = [
  "dashboard",
  "expenses",
  "wallets",
  "summary",
  "accounts",
  "settings",
];

const Sidebar = () => {
  const [data, setData] = useContext(AppDataContext);

  return (
    <>
      <Backdrop
        show={data.isOpenDraver}
        clicked={() => setData({ type: "drawerFlag" })}
      />
      <aside
        className={styles.sidebarDrawer}
        style={{
          transform: `translateX(${data.isOpenDraver ? "0" : "-110%"})`,
        }}
      >
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
              {sidebarNavLinks.map((navLinkItem) => (
                <li key={navLinkItem} className={styles.sidebarNavItem}>
                  <NavLink
                    to={`/${navLinkItem}`}
                    className={({ isActive }) =>
                      [
                        styles.navlinkItemLink,
                        isActive
                          ? styles.sidebarNavLinkActive
                          : styles.sidebarNavLink,
                      ].join(" ")
                    }
                  >
                    {navLinkItem}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
