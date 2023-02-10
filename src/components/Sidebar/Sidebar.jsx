import styled from "./Sidebar.module.css";
import LogoImage from "../../assets/icons/logo.png";

import { SidebarData } from "../../data/data";

const Sidebar = () => {
    return (
        <div className={styled.sidebar}>
            {/* LOGO */}
            <div className={styled.logo}>
                <img src={LogoImage} alt="logo"/>
                <span>
                    <span>CH</span>Sh<span>o</span>ps
                </span>                
            </div>
            {/* MENU */}
            <div className={styled.menu}>
                {SidebarData.map((item, index) => {
                return (
                <div key={index} className={styled.menuItem}>
                    <item.icon/> <span>{item.heading}</span>
                </div>
                    )}
                )}
            </div>
        </div>
    )
}

export default Sidebar;