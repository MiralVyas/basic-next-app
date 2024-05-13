import React from 'react'
import AddToCart from '../AddToCart'
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <>
        <h1 className={styles.cardContainer}>Product Dashboard</h1>
        <AddToCart />
    </>
  )
}

export default ProductCard
