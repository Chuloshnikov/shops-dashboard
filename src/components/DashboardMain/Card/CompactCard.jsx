import React from "react";
import {
    CircularProgressbar,
    buildStyles
    } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import styles from "./CompactCard.module.css";

const CompactCard = ({ param, expanded, setExpanded }) => {

    const Png = param.png;

    return (
    <AnimateSharedLayout>
        <motion.div className={styles.CompactCard}
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        layoutId="expandableCard"
        onClick={() => setExpanded(!expanded)}
        >
            <div className={styles.radialBar}>
                    <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue} %`}
                    styles={buildStyles({
                        textColor: "#ffffff",
                        pathColor: "#ffffff",
                        trailColor: "#b5acac",
                        })}/>
                <span>{param.title}</span>
            </div>
            <div className={styles.detail}>
                <Png/>
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    </AnimateSharedLayout>
    )
}

export default CompactCard;