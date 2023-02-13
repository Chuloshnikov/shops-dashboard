import React from 'react';
import styles from "./DashboardMain.module.css";
import Cards from './Cards/Cards';
import Table from '../Table/Table';

const DashboardMain = () => {
  return (
    <div>
        <h1 >Dashboard</h1>
        <Cards/>
        <Table/>
    </div>
  )
}

export default DashboardMain;

