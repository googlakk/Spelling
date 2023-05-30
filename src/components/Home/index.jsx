import React from 'react'
import Card from '../Card'
import logo from '../../assets/img/bee-logo.png'
import letters from '../../assets/img/letter.png'
import styles from './Home.module.scss'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt='logo' className={styles.logo} />
      <img src={letters} alt="ds" className={styles.letters} />
      <Card />
    </div>
  )
}

export default HomePage
