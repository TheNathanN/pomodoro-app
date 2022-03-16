import React, { useState, useContext, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import AppContext from '../context/AppContext';
import styles from '../styles/Home.module.scss';

export default function CountdownCircle() {
  const [windowWidth, setWindowWidth] = useState<number>();
  const [circleSize, setCircleSize] = useState(0);
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

  useEffect(() => {
    if (windowWidth >= 768 || window.screen.width >= 768) {
      setCircleSize(339);
    } else {
      setCircleSize(258);
    }

    const handleResize = () => {
      setWindowWidth(window.screen.width);
    };

    window.addEventListener('resize', handleResize);
  }, [windowWidth, setWindowWidth]);

  return (
    <div onClick={() => setIsActive(!isActive)}>
      <CountdownCircleTimer
        key={time}
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
        size={circleSize}
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
