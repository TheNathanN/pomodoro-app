import { useState, useContext } from 'react';
import { SelectOption } from '../utils/types';
import AppContext from '../context/AppContext';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Selector from '../components/Selector';
import Timer from '../components/Timer';
import SettingsModal from '../components/modals/SettingsModal';

export default function Home() {
  const { fontSetting } = useContext(AppContext);

  const [selected, setSelected] = useState<SelectOption>('pomodoro');
  const [settingsHidden, setSettingsHidden] = useState(true);

  return (
    <div
      className={
        !settingsHidden
          ? `${styles.container} ${styles.settings}`
          : styles.container
      }
      style={
        fontSetting === 'sans'
          ? {
              fontFamily: 'Kumbh Sans, sans-serif',
            }
          : fontSetting === 'serif'
          ? {
              fontFamily: 'Roboto Slab, serif',
            }
          : { fontFamily: 'Space Mono, monospace', fontWeight: 'lighter' }
      }
    >
      {/* SettingsModal is hidden unless !settingsHidden */}
      {!settingsHidden && (
        <SettingsModal setSettingsHidden={setSettingsHidden} />
      )}
      {/* Logo */}
      <h1 className={styles.logo}>pomodoro</h1>
      {/* Select Bar */}
      <Selector selected={selected} setSelected={setSelected} />
      {/* Timer Section */}
      <Timer />
      {/* Settings Button */}
      <div
        className={styles['settings-icon']}
        onClick={() => setSettingsHidden(false)}
      >
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
