import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '../../assets/img/bee-logo.png'

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.navbar}>
        <Link to={'/'} className={styles.link}>
          <img src={logo} alt='logo' className={styles.logo} />
        </Link>
        <ul className={styles.nav}>
          <li>О нас</li>
          <li>Правила</li>
          <li>Контакты</li>
        </ul>
      </header>
    </div>
  )
}

export default Header
