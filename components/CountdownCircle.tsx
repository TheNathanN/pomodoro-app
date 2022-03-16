import React, { useState, useContext, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import AppContext from '../context/AppContext';
import styles from '../styles/Home.module.scss';

export default function CountdownCircle() {
  const {
    pomSetting,
    longSetting,
    shortSetting,
    selected,
    colorSetting,
    isActive,
    setIsActive,
  } = useContext(AppContext);

  const startingMinutes =
    selected === 'pomodoro'
      ? pomSetting
      : selected === 'long'
      ? longSetting
      : shortSetting;

  const time = startingMinutes * 60;

  const [windowWidth, setWindowWidth] = useState<number>();
  const [circleSize, setCircleSize] = useState(0);
  const [timerKey, setTimerKey] = useState(time);

  useEffect(() => {
    setTimerKey(time);

    if (windowWidth >= 768 || window.screen.width >= 768) {
      setCircleSize(340);
    } else {
      setCircleSize(260);
    }

    const handleResize = () => {
      setWindowWidth(window.screen.width);
    };

    window.addEventListener('resize', handleResize);
  }, [windowWidth, setWindowWidth, time]);

  return (
    <CountdownCircleTimer
      key={timerKey}
      isPlaying={isActive ? true : false}
      duration={time}
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
      onComplete={() => {
        setIsActive(false);
      }}
    >
      {({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return (
          <div
            className={styles['timer-container']}
            onClick={() => {
              setIsActive(!isActive);

              if (remainingTime === 0) {
                setTimerKey(Math.random());
              }
            }}
          >
            <div className={styles.timer}>{`${
              minutes < 10 ? `0${minutes}` : minutes
            }:${seconds < 10 ? `0${seconds}` : seconds}`}</div>
            {!isActive && remainingTime > 0 ? (
              <p className={styles.controller}>START</p>
            ) : remainingTime === 0 ? (
              <p className={styles.controller}>RESTART</p>
            ) : (
              <p className={styles.controller}>PAUSE</p>
            )}
          </div>
        );
      }}
    </CountdownCircleTimer>
  );
}
