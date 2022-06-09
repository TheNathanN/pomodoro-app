import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import AppContext from '../../context/AppContext';
import styles from '../../styles/Home.module.scss';
import DurationSettings from '../settings/DurationSettings';
import FontSettings from '../settings/FontSettings';
import ColorSettings from '../settings/ColorSettings';

export default function SettingsModal() {
  const { setSettingsHidden } = useContext(AppContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles['settings-bg']}
    >
      <motion.section
        initial={{ y: '100vw', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={styles['settings-container']}
      >
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
      </motion.section>
    </motion.div>
  );
}
