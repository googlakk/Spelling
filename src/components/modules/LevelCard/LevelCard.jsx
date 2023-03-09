import React from 'react'
import { Link } from 'react-router-dom'

import levels from '../../../utils/levels'
import styles from './LevelCard.module.scss'

const LevelCard = ({ stage }) => {
  return (
    <div className={styles.levels}>
      {levels.map((level) =>
        <Link
          key={level.id}
          to={`/game?stage=${stage.id}&level=${level.id}`}
          className={styles.item}
        >
          <img  className={styles.itemImg} src={level.img} alt="" />
        </Link>
      )}
    </div>
  )
}

export default LevelCard
