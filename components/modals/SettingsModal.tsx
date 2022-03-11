import React, { useState, SetStateAction } from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import DurationInput from '../DurationInput';

interface Props {
  setSettingsHidden: React.Dispatch<SetStateAction<boolean>>;
}

export default function SettingsModal({ setSettingsHidden }: Props) {
  const [timeInputs, setTimeInputs] = useState({
    pomodoro: 25,
    short: 10,
    long: 15,
  });

  return (
    <div className={styles['settings-bg']}>
      <section className={styles['settings-container']}>
        {/* Setting Headers */}
        <div className={styles['settings-header']}>
          <h2>Settings</h2>
          <Image
            src='/assets/icon-close.svg'
            alt='close'
            onClick={() => setSettingsHidden(true)}
            width={15}
            height={15}
          />
        </div>
        {/* Setting Options */}
        <div className={styles['settings-options']}>
          <div className={styles['duration']}>
            <h3>TIME (MINUTES)</h3>
            <DurationInput
              timeInputs={timeInputs}
              setTimeInputs={setTimeInputs}
              inputOption='pomodoro'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
