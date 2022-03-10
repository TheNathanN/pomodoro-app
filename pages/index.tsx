import { useState } from 'react';
import { SelectOption } from '../utils/types';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Selector from '../components/Selector';
import LoadingCircle from '../components/LoadingCircle';

export default function Home() {
  const [selected, setSelected] = useState<SelectOption>('pomodoro');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pomodoro App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Logo */}
      <h1 className={styles.logo}>pomodoro</h1>

      {/* Select Bar */}
      <Selector selected={selected} setSelected={setSelected} />

      {/* Timer Section */}
      <div className={styles['first-circle']}>
        <div className={styles['second-circle']}>
          {/* Loading Circle Animation */}
          <LoadingCircle />
          {/* Timer */}
          <div className={styles['timer-container']}>
            <p className={styles.timer}>
              {minutes}:{seconds}
            </p>
            <p className={styles.controller}>RESTART</p>
          </div>
        </div>
      </div>

      {/* Settings Button */}
      <div className={styles['settings-icon']}>
        <Image
          src='/assets/icon-settings.svg'
          alt='settings'
          width={30}
          height={30}
        />
      </div>
    </div>
  );
}