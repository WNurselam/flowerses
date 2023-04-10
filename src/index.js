import React from 'react'
import styles from './styles.module.css'

// Aldığımız propları className e atarak css ile düzenlemeler yapacağız.
export const Button = ({ text, type }) => {
  return <button className={`${styles.btn} ${styles[type]}`}>{text}</button>
}
