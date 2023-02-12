import React from "react";
import Chart from "react-apexcharts";
import styles from "./ExpandedCard.module.css";
import { UilTimes } from '@iconscout/react-unicons';
import { motion, AnimateSharedLayout } from "framer-motion";

const ExpandedCard = ({ param, expanded, setExpanded }) => {

    const data = {
        options: {
            chart: {
                type: 'area',
                height: 'auto',
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000000',
                opacity: 0.35,
            },
            fill: {
                colors: ['#ffffff'],
                type: 'gradient',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                color: ['white'],
            },
            Tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                }
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '2023-02-19T00:00:00.000Z',
                    '2023-02-19T01:00:00.000Z',
                    '2023-02-19T02:00:00.000Z',
                    '2023-02-19T03:00:00.000Z',
                    '2023-02-19T04:00:00.000Z',
                    '2023-02-19T05:00:00.000Z',
                    '2023-02-19T06:00:00.000Z',
                ],
            },
        },
    };

    return (
    <AnimateSharedLayout>
        <motion.div className={styles.ExpandedCard} 
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        animate={{ x: [null, 100, 0], scale: [0, 1], }}
    
        >
            <div 
            style={{
                alignSelf: 'flex-end',
                cursor: 'pointer',
                color: 'white'
            }}
            >
                <UilTimes onClick={() => setExpanded(!expanded)}
                />
            </div>
            <span>
                {param.title}
            </span>
            <div className={styles.chartContainer}>
                <Chart series={param.series} type="area" options={data.options}/>
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    </AnimateSharedLayout>
    )
}

export default ExpandedCard;