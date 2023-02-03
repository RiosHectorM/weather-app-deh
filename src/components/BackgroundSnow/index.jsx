import React from 'react'
import styles from './BackgroundSnow.module.css';

function BackgroundSnow() {
  return (
    <div className="bg-gradient-to-t from-teal-100 via-blue-400 to-blue-900 fixed h-full w-full -z-10">
      <div className={styles.more} id="container">asdasd</div>
    </div>
  );
}

export default BackgroundSnow