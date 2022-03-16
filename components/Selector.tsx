import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import styles from '../styles/Home.module.scss';

export default function Selector() {
  const { colorSetting, selected, setSelected, setIsActive } =
    useContext(AppContext);
  return (
    <div className={styles.selector}>
      <p
        className={
          selected === 'pomodoro'
            ? `${styles['selector-item']} ${styles.selected}`
            : styles['selector-item']
        }
        style={
          selected === 'pomodoro' && colorSetting === 'red'
            ? {
                backgroundColor: '#f87070',
              }
            : selected === 'pomodoro' && colorSetting === 'blue'
            ? {
                backgroundColor: '#70F3F8',
              }
            : selected === 'pomodoro' && colorSetting === 'purple'
            ? {
                backgroundColor: '#D881F8',
              }
            : {}
        }
        onClick={() => {
          setIsActive(false);
          setSelected('pomodoro');
        }}
      >
        pomodoro
      </p>
      <p
        className={
          selected === 'short'
            ? `${styles['selector-item']} ${styles.selected}`
            : styles['selector-item']
        }
        style={
          selected === 'short' && colorSetting === 'red'
            ? {
                backgroundColor: '#f87070',
              }
            : selected === 'short' && colorSetting === 'blue'
            ? {
                backgroundColor: '#70F3F8',
              }
            : selected === 'short' && colorSetting === 'purple'
            ? {
                backgroundColor: '#D881F8',
              }
            : {}
        }
        onClick={() => {
          setIsActive(false);
          setSelected('short');
        }}
      >
        short break
      </p>
      <p
        className={
          selected === 'long'
            ? `${styles['selector-item']} ${styles.selected}`
            : styles['selector-item']
        }
        style={
          selected === 'long' && colorSetting === 'red'
            ? {
                backgroundColor: '#f87070',
              }
            : selected === 'long' && colorSetting === 'blue'
            ? {
                backgroundColor: '#70F3F8',
              }
            : selected === 'long' && colorSetting === 'purple'
            ? {
                backgroundColor: '#D881F8',
              }
            : {}
        }
        onClick={() => {
          setIsActive(false);
          setSelected('long');
        }}
      >
        long break
      </p>
    </div>
  );
}
