import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cs from 'classnames';

import logo from '../../../assets/img/bee-logo.png'
import styles from './LevelHeader.module.scss'

const LevelHeader = ({ stage, levelImg, playSound }) => {
  const navigate = useNavigate()

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={logo} alt="" />
      </div>
      <div className={styles.text}>
        <div className={styles.stage}>
          {stage.title}
        </div>
        <div className={styles.age}>
          {stage.age}
        </div>  
      </div>
      <div className={styles.level}>
        {levelImg ? <img className={styles.levelImg} src={levelImg} alt="" /> : null}
      </div>
      <div className={styles.btns}>
        <div
          onClick={playSound}
          className={cs(styles.item, styles.play)}
        />
        <Link to={'/'} className={cs(styles.item, styles.home)} />
        <div
          onClick={() => navigate(-1)}
          className={cs(styles.item, styles.prev)}
        />
      </div>
    </div>
  )
}

export default LevelHeader
