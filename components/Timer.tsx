import React, { useState, useContext, useEffect } from 'react';
import { useTimer } from 'reactjs-countdown-hook';
import AppContext from '../context/AppContext';
import LoadingCircle from './LoadingCircle';
import styles from '../styles/Home.module.scss';

export default function Timer() {
  const { pomSetting, longSetting, shortSetting, selected } =
    useContext(AppContext);

  const startingMinutes =
    selected === 'pomodoro'
      ? pomSetting
      : selected === 'long'
      ? longSetting
      : shortSetting;
  let time = startingMinutes * 60;

  const {
    isActive,
    counter,
    seconds,
    minutes,
    hours,
    days,
    pause,
    resume,
    reset,
  } = useTimer(time);

  useEffect(() => {
    reset();
    pause();
  }, [startingMinutes, pause, reset]);

  return (
    <div className={styles['first-circle']}>
      <div className={styles['second-circle']}>
        {/* Loading Circle Animation */}
        <LoadingCircle />
        {/* Timer */}
        <div className={styles['timer-container']}>
          <p className={styles.timer}>{`${
            minutes && minutes !== '00'
              ? minutes
              : selected === 'pomodoro'
              ? pomSetting
              : selected === 'long'
              ? longSetting
              : `0${shortSetting}`
          }:${seconds ? seconds : '00'}`}</p>
          <p
            className={styles.controller}
            onClick={() => (!isActive ? resume() : pause())}
          >
            {!isActive ? 'START' : 'PAUSE'}
          </p>
        </div>
      </div>
    </div>
  );
}
