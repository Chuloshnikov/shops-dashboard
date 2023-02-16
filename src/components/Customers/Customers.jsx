import React from 'react'

import styles from './Customers.module.css';

const Customers = (props) => {
  console.log(props);
  return (
    <li className={styles.Customer}>
      <div className={styles.photoContainer}>
        <p>{props.id}</p>
        <img src={props.avatar} alt="user avatar"/>
      </div>
      
        <p>{props.first_name} {props.last_name}</p>
        <p>{props.email}</p>
    </li>
  )
}

export default Customers;