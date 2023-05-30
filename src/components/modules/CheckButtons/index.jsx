import React from 'react'
import cs from 'classnames'
import styles from './CheckButtons.module.scss'

const BtnCheck = ({ title, onClick, className }) => {
  return (
    <button onClick={onClick} className={cs(styles.button, className)}>
      {title}
    </button>
  )
}

export default BtnCheck