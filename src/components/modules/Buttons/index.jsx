import React from 'react'
import cs from 'classnames'
import styles from './Buttons.module.scss'

const Btn = ({ title, onClick, className }) => {
  return (
    <button onClick={onClick} className={cs(styles.button, className)}>
      {title}
    </button>
  )
}

export default Btn
