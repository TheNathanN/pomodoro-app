import React, { SetStateAction } from 'react';
import { SelectOption } from '../utils/types';
import styles from '../styles/Home.module.scss';

interface Props {
  selected: SelectOption;
  setSelected: React.Dispatch<SetStateAction<SelectOption>>;
}

export default function Selector({ selected, setSelected }: Props) {
  return (
    <div className={styles.selector}>
      <p
        className={
          selected === 'pomodoro'
            ? `${styles['selector-item']} ${styles.selected}`
            : styles['selector-item']
        }
        onClick={() => setSelected('pomodoro')}
      >
        pomodoro
      </p>
      <p
        className={
          selected === 'short'
            ? `${styles['selector-item']} ${styles.selected}`
            : styles['selector-item']
        }
        onClick={() => setSelected('short')}
      >
        short break
      </p>
      <p
        className={
          selected === 'long'
            ? `${styles['selector-item']} ${styles.selected}`
            : styles['selector-item']
        }
        onClick={() => setSelected('long')}
      >
        long break
      </p>
    </div>
  );
}
