import React from 'react'
import { Link } from 'react-router-dom'
import Btn from '../../modules/Buttons'
import styles from './CardItem.module.scss'

const CardItem = ({ stage }) => {
  return (
    <div className={styles.cardItem}>
      <div className={styles.titleBorder}>
        {stage.title}
      </div>
      <div className={styles.age}>{stage.age}</div>
      <Link to={`/levels?stage=${stage.id}`} className={styles.btn}>
        <Btn title={'OK'} />
      </Link>
    </div>
  )
}

export default CardItem
