import React, { useState, SetStateAction } from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import DurationSettings from '../settings/DurationSettings';
import FontSettings from '../settings/FontSettings';
import ColorSettings from '../settings/ColorSettings';

interface Props {
  setSettingsHidden: React.Dispatch<SetStateAction<boolean>>;
}

export default function SettingsModal({ setSettingsHidden }: Props) {
  return (
    <div className={styles['settings-bg']}>
      <section className={styles['settings-container']}>
        {/* Settings Header */}
        <div className={styles['settings-header']}>
          <h2>Settings</h2>
        </div>
        {/* Settings Options */}
        <div className={styles['settings-options']}>
          {/* Duration Settings */}
          <DurationSettings />
          {/* Font Settings */}
          <FontSettings />
          {/* Color Settings */}
          <ColorSettings />
        </div>
        <button type='button' onClick={() => setSettingsHidden(true)}>
          Apply
        </button>
      </section>
    </div>
  );
}
