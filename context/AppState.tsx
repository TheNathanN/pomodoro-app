import React, { useState } from 'react';
import AppContext from './AppContext';

export default function AppState(props) {
  const [pomSetting, setPomSetting] = useState(25);
  const [longSetting, setLongSetting] = useState(15);
  const [shortSetting, setShortSetting] = useState(5);
  const [fontSetting, setFontSetting] = useState<'sans' | 'serif' | 'mono'>(
    'sans'
  );
  const [colorSetting, setColorSetting] = useState<'red' | 'blue' | 'purple'>(
    'red'
  );

  return (
    <AppContext.Provider
      value={{
        pomSetting,
        setPomSetting,
        longSetting,
        setLongSetting,
        shortSetting,
        setShortSetting,
        fontSetting,
        setFontSetting,
        colorSetting,
        setColorSetting,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
