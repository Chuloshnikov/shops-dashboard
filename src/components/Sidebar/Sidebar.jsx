import React, { useState } from 'react';
import styles from "./Sidebar.module.css";
import LogoImage from "../../assets/icons/logo.png";
import { Link, NavLink } from "react-router-dom";
import { motion } from 'framer-motion';

import { SidebarData } from "../../data/data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";

const Sidebar = () => {

    const [expanded, setExpanded] = useState(true);

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }

    return (
        <>
            <div className={styles.bars} 
            style={expanded?{left: '60%'} : {left: '5%'}}
            onClick={() => setExpanded(!expanded)}
            >
                <UilBars/>
            </div>
        <motion.div className={styles.sidebar}
            variants={sidebarVariants}
            animate={window.innerWidth<=768?`${expanded}` : ''}
        >
            {/* LOGO */}
            <Link to="https://github.com/Chuloshnikov" className={styles.logo}>
                <img src={LogoImage} alt="logo"/>
                <span>
                    <span>CH</span>Sh<span>o</span>ps
                </span>                
            </Link>
            {/* MENU */}
            <div className={styles.menu}>
                {SidebarData.map((item, index) => {
                return (
                    <NavLink to={item.heading} key={index} className={styles.menuItem}>
                        <item.icon/> <span>{item.heading}</span>
                    </NavLink>
                    )}
                )}
                <div className={styles.menuArrowButton}>
                    <UilSignOutAlt/>
                </div>
            </div>
        </motion.div>
        </>
    )
}

export default Sidebar;