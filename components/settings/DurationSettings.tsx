import React from 'react';
import DurationInput from './DurationInput';
import styles from '../../styles/Home.module.scss';

export default function DurationSettings() {
  return (
    <div className={styles['duration']}>
      <h3>TIME (MINUTES)</h3>
      <div className={styles['duration-input-container']}>
        <DurationInput inputOption='pomodoro' />
        <DurationInput inputOption='short' />
        <DurationInput inputOption='long' />
      </div>
    </div>
  );
}
