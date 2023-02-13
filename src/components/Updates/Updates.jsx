import React from 'react'
import { UpdatesData } from '../../data/data';
import styles from './Updates.module.css';

const Updates = () => {
  return (
    <div className={styles.Updates}>
        {UpdatesData.map((update, id) => {
            return (
                <div key={id} className={styles.update}>
                    <img src={update.img} alt='user'/>
                    <div className={styles.notification}>
                        <div style={{ marginBottom: '0.5rem'}}>
                            <span>{update.name}</span>
                            <span> {update.noti}</span>
                        </div>
                            <span>{update.time}</span>
                    </div>
                    
                        
                    
                </div>
            )
        })}
    </div>
  )
}

export default Updates