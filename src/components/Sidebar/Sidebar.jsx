import styled from "./Sidebar.module.css";
import LogoImage from "../../assets/icons/logo.png";
import { Link, NavLink } from "react-router-dom";

import { SidebarData } from "../../data/data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = () => {
    return (
        <div className={styled.sidebar}>
            {/* LOGO */}
            <Link to="https://github.com/Chuloshnikov" className={styled.logo}>
                <img src={LogoImage} alt="logo"/>
                <span>
                    <span>CH</span>Sh<span>o</span>ps
                </span>                
            </Link>
            {/* MENU */}
            <div className={styled.menu}>
                {SidebarData.map((item, index) => {
                return (
                    <NavLink to={item.heading} key={index} className={styled.menuItem}>
                        <item.icon/> <span>{item.heading}</span>
                    </NavLink>
                    )}
                )}
                <div className={styled.menuArrowButton}>
                    <UilSignOutAlt/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;