import React from 'react';
import Cards from './Cards/Cards';
import Table from '../Table/Table';
import styles from './DashboardMain.module.css';

const DashboardMain = () => {
  return (
    <div className={styles.dashMain}>
        <h1 >Dashboard</h1>
        <Cards/>
        <Table/>
    </div>
  )
}

export default DashboardMain;

