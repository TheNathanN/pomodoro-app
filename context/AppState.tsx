import React, { useState } from 'react';
import AppContext from './AppContext';

export default function AppState(props) {
  const [pomSetting, setPomSetting] = useState(25);
  const [longSetting, setLongSetting] = useState(15);
  const [shortSetting, setShortSetting] = useState(5);
  const [settingsHidden, setSettingsHidden] = useState(true);
  const [fontSetting, setFontSetting] = useState<'sans' | 'serif' | 'mono'>(
    'sans'
  );
  const [colorSetting, setColorSetting] = useState<'red' | 'blue' | 'purple'>(
    'red'
  );
  const [selected, setSelected] = useState<'pomodoro' | 'long' | 'short'>(
    'pomodoro'
  );
  const [isActive, setIsActive] = useState(false);

  return (
    <AppContext.Provider
      value={{
        pomSetting,
        setPomSetting,
        longSetting,
        setLongSetting,
        shortSetting,
        setShortSetting,
        settingsHidden,
        setSettingsHidden,
        fontSetting,
        setFontSetting,
        colorSetting,
        setColorSetting,
        selected,
        setSelected,
        isActive,
        setIsActive,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
