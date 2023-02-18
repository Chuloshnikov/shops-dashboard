import React from 'react'
import { goods } from '../../data/Products';
import styles from './Products.module.css';

const Products = () => {
  return (
    <div>
        <h1>Products</h1>
        <div className={styles.ProductsContainer}>
            {goods.map((item) => (
              <div key={item.id} className={styles.item}>
                <img src={item.poster} alt="item"/>
                <h5>{item.name}</h5>
                <p>{item.category}</p>
                <p>{item.price} UAH</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Products;