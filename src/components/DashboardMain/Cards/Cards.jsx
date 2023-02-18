import React from 'react'
import styles from "./Cards.module.css";
import { CardsData } from "../../../data/data";
import Card from '../Card/Card';

const Cards = () => {
  return (
    <div className={styles.cards}>
        {CardsData.map((card, id) => {
            return (
                <div key={id} className={styles.cardContainer}>
                    <Card
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        value={card.value}
                        png={card.png}
                        series={card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards;