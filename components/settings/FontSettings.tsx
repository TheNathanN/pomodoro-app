import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import styles from '../../styles/Home.module.scss';

export default function FontSettings() {
  const { fontSetting, setFontSetting } = useContext(AppContext);

  return (
    <div className={styles['font']}>
      <h3>FONT</h3>
      <div className={styles['font-option-container']}>
        <div
          className={`${styles['font-option']} ${styles['sans']} ${
            fontSetting === 'sans' && styles['selected']
          }`}
          onClick={() => setFontSetting('sans')}
        >
          Aa
        </div>
        <div
          className={`${styles['font-option']} ${styles['serif']} ${
            fontSetting === 'serif' && styles['selected']
          }`}
          onClick={() => setFontSetting('serif')}
        >
          Aa
        </div>
        <div
          className={`${styles['font-option']} ${styles['mono']} ${
            fontSetting === 'mono' && styles['selected']
          }`}
          onClick={() => setFontSetting('mono')}
        >
          Aa
        </div>
      </div>
    </div>
  );
}
