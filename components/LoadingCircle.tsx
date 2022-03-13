import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import styles from '../styles/Home.module.scss';

export default function LoadingCircle() {
  const { colorSetting } = useContext(AppContext);
  return (
    <svg
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      className={styles.svg}
      stroke={
        colorSetting === 'red'
          ? '#f87070'
          : colorSetting === 'blue'
          ? '#70F3F8'
          : '#D881F8'
      }
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
