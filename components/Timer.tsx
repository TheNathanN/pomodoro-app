import React, { useState, SetStateAction } from 'react';
import LoadingCircle from './LoadingCircle';
import styles from '../styles/Home.module.scss';

export default function Timer() {
  const [minutes, setMinutes] = useState<number | string>(25);
  const [seconds, setSeconds] = useState<number | string>('00');
  const [isPaused, setIsPaused] = useState(true);

  return (
    <div className={styles['first-circle']}>
      <div className={styles['second-circle']}>
        {/* Loading Circle Animation */}
        <LoadingCircle />
        {/* Timer */}
        <div className={styles['timer-container']}>
          <p className={styles.timer}>
            {minutes}:{seconds}
          </p>
          <p
            className={styles.controller}
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? 'START' : 'PAUSE'}
          </p>
        </div>
      </div>
    </div>
  );
}
