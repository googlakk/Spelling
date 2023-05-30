import React from 'react'
import { useLocation } from 'react-router-dom'

import stages from '../../utils/stages'
import LevelHeader from '../modules/LevelHeader/LevelHeader'
import LevelCard from '../modules/LevelCard/LevelCard'
import styles from './Level.module.scss'

const Level = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const stageId = searchParams.get('stage');
  const stage = stages[stageId - 1]

  return (
    <div className={styles.container}>
      <LevelHeader stage={stage} age={stage} />
      <LevelCard stage={stage} />
    </div>
  )
}

export default Level
