import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../../context/AppContext';
import styles from '../../styles/Home.module.scss';

export default function ColorSettings() {
  const { colorSetting, setColorSetting } = useContext(AppContext);

  return (
    <div className={styles['color']}>
      <h3>COLOR</h3>
      <div className={styles['color-option-container']}>
        <div
          className={`${styles['color-option']} ${styles['red']}`}
          onClick={() => setColorSetting('red')}
        >
          {colorSetting === 'red' && (
            <Image
              src='/assets/check.png'
              alt='check mark'
              width={20}
              height={20}
            />
          )}
        </div>
        <div
          className={`${styles['color-option']} ${styles['blue']}`}
          onClick={() => setColorSetting('blue')}
        >
          {colorSetting === 'blue' && (
            <Image
              src='/assets/check.png'
              alt='check mark'
              width={20}
              height={20}
            />
          )}
        </div>
        <div
          className={`${styles['color-option']} ${styles['purple']}`}
          onClick={() => setColorSetting('purple')}
        >
          {colorSetting === 'purple' && (
            <Image
              src='/assets/check.png'
              alt='check mark'
              width={20}
              height={20}
            />
          )}
        </div>
      </div>
    </div>
  );
}
