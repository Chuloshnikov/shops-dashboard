import React, { useState } from 'react'
import styles from "./Card.module.css";

import { AnimateSharedLayout } from 'framer-motion';

const Card = (props) => {

    const [expended, setExpended] = useState(false);

    return (
        <AnimateSharedLayout>
            { expended ?  'Expanded' : <CompactCard param={props}/>}
        </AnimateSharedLayout>
    )
}

function CompactCard({param}) {

    const Png = param.png;

    return (
        <div className={styles.compactCard}>
            <div className={styles.radialBar}>
                Chart
            </div>
            <div className={styles.detail}>
                <Png/>
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
    )
}

export default Card;