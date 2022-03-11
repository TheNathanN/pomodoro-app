import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

interface Props {
  inputOption: string;
  timeInputs: {
    pomodoro: number;
    short: number;
    long: number;
  };
  setTimeInputs: React.Dispatch<
    React.SetStateAction<{
      pomodoro: number;
      short: number;
      long: number;
    }>
  >;
}

export default function DurationInput({
  inputOption,
  timeInputs,
  setTimeInputs,
}: Props) {
  return (
    <div className={styles['input-container']}>
      <p>pomodoro</p>
      <div className={styles['input-item']}>
        <input value={timeInputs[inputOption]} type='number' />
        <div className={styles['btn-container']}>
          <Image
            src='/assets/icon-arrow-up.svg'
            alt='arrow up'
            width={10}
            height={8}
          />
          <Image
            src='/assets/icon-arrow-down.svg'
            alt='arrow down'
            width={10}
            height={8}
          />
        </div>
      </div>
    </div>
  );
}
