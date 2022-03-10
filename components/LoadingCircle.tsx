import React from 'react';
import styles from '../styles/Home.module.scss';

export default function LoadingCircle() {
  return (
    <svg
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      className={styles.svg}
    >
      <circle
        cx='50'
        cy='50'
        r='45'
        strokeLinecap='round'
        className={styles['loading-circle']}
      />
    </svg>
  );
}
