import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';

interface Props {
  inputOption: 'pomodoro' | 'long' | 'short';
}

export default function DurationInput({ inputOption }: Props) {
  const {
    pomSetting,
    longSetting,
    setLongSetting,
    setPomSetting,
    setShortSetting,
    shortSetting,
  } = useContext(AppContext);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputOption === 'pomodoro'
      ? setPomSetting(Number(e.currentTarget.value))
      : inputOption === 'long'
      ? setLongSetting(Number(e.currentTarget.value))
      : setShortSetting(Number(e.currentTarget.value));
  };

  const addHandler = () => {
    inputOption === 'pomodoro'
      ? setPomSetting(pomSetting + 1)
      : inputOption === 'long'
      ? setLongSetting(longSetting + 1)
      : setShortSetting(shortSetting + 1);
  };

  const minusHandler = () => {
    inputOption === 'pomodoro'
      ? setPomSetting(pomSetting - 1)
      : inputOption === 'long'
      ? setLongSetting(longSetting - 1)
      : setShortSetting(shortSetting - 1);
  };

  return (
    <div className={styles['input-container']}>
      <p>
        {inputOption === 'pomodoro'
          ? 'pomodoro'
          : inputOption === 'long'
          ? 'long break'
          : 'short break'}
      </p>
      <div className={styles['input-item']}>
        <input
          value={
            inputOption === 'pomodoro'
              ? pomSetting
              : inputOption === 'long'
              ? longSetting
              : shortSetting
          }
          onChange={changeHandler}
          type='number'
        />
        <div className={styles['btn-container']}>
          <Image
            src='/assets/icon-arrow-up.svg'
            alt='arrow up'
            width={11}
            height={8}
            onClick={addHandler}
          />
          <Image
            src='/assets/icon-arrow-down.svg'
            alt='arrow down'
            width={11}
            height={8}
            onClick={minusHandler}
          />
        </div>
      </div>
    </div>
  );
}
