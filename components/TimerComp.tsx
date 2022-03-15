import React from 'react';
import CountdownCircle from './CountdownCircle';
import styles from '../styles/Home.module.scss';

export default function TimerComp() {
  return (
    <div className={styles['first-circle']}>
      <div className={styles['second-circle']}>
        <CountdownCircle />
      </div>
    </div>
  );
}
