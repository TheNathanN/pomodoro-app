import React, { useState, useContext, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import AppContext from '../context/AppContext';
import styles from '../styles/Home.module.scss';

export default function CountdownCircle() {
  const [isActive, setIsActive] = useState(false);
  const { pomSetting, longSetting, shortSetting, selected, colorSetting } =
    useContext(AppContext);

  const startingMinutes =
    selected === 'pomodoro'
      ? pomSetting
      : selected === 'long'
      ? longSetting
      : shortSetting;

  const time = startingMinutes * 60;

  return (
    <div onClick={() => setIsActive(!isActive)}>
      <CountdownCircleTimer
        isPlaying={isActive ? true : false}
        duration={time}
        initialRemainingTime={time}
        colors={
          colorSetting === 'red'
            ? '#f87070'
            : colorSetting === 'blue'
            ? '#70F3F8'
            : '#D881F8'
        }
        size={200}
        strokeWidth={9}
        rotation='counterclockwise'
        trailColor='#161932'
      >
        {({ remainingTime }) => {
          const minutes = Math.floor(remainingTime / 60);
          const seconds = remainingTime % 60;
          return (
            <div className={styles['timer-container']}>
              <div className={styles.timer}>{`${
                minutes < 10 ? `0${minutes}` : minutes
              }:${seconds < 10 ? `0${seconds}` : seconds}`}</div>
              {!isActive ? (
                <p className={styles.controller}>START</p>
              ) : (
                <p className={styles.controller}>PAUSE</p>
              )}
            </div>
          );
        }}
      </CountdownCircleTimer>
    </div>
  );
}
