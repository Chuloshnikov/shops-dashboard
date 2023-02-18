import React, { useState } from 'react'
import { goods } from '../../data/Products';
import styles from './Products.module.css';

const Products = () => {

  const [expanded, setExpanded] = useState(false);

  return (
    <div>
        <h1>Products</h1>
        <div className={styles.ProductsContainer}
        onClick={() => setExpanded(!expanded)}
        >
            {goods.map((item) => (
              <div key={item.id} className={styles.item}>
                <img src={item.poster} alt="item"/>
                <h5>{item.name}</h5>
                <p>{item.category}</p>
                <p>{item.price} UAH</p>
                <div className={styles.buttonContainer}>
                  <button>
                    Buy
                  </button>
                  <button>
                    Info
                  </button>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Products;