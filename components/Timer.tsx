import React, { SetStateAction } from 'react';
import LoadingCircle from './LoadingCircle';
import styles from '../styles/Home.module.scss';

interface Props {
  minutes: number | string;
  seconds: number | string;
  isPaused: boolean;
  setIsPaused: React.Dispatch<SetStateAction<boolean>>;
}

export default function Timer({ minutes, seconds, isPaused, setIsPaused }) {
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
          <p className={styles.controller}>{isPaused ? 'START' : 'PAUSE'}</p>
        </div>
      </div>
    </div>
  );
}
