import React from 'react'
import styles from './RightSide.module.css';
import Updates from '../Updates/Updates';
import CustomerReview from '../CustomerReview/CustomerReview';

const RightSide = () => {
  return (
    <div className={styles.RightSide}>
       <div>
            <h3 className={styles.title}>Updates</h3>
            <Updates/>
        </div> 
        <div>
            <h3 className={styles.title}>Customer Review</h3>
            <CustomerReview/>
        </div>
    </div>
  )
}

export default RightSide