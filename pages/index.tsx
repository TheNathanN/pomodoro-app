import { useContext } from 'react';
import AppContext from '../context/AppContext';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Selector from '../components/Selector';
import Timer from '../components/Timer';
import SettingsModal from '../components/modals/SettingsModal';

export default function Home() {
  const { fontSetting, settingsHidden, setSettingsHidden } =
    useContext(AppContext);

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
      {!settingsHidden && <SettingsModal />}
      {/* Logo */}
      <h1 className={styles.logo}>pomodoro</h1>
      {/* Select Bar */}
      <Selector />
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
