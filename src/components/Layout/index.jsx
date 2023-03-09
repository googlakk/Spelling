import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import styles from '../../index.css';

const Layout = () => {
  return (
      <div styles={styles.container}>
        <Outlet />
        <Footer />
      </div>
  );
};

export default Layout;
