import React, { createContext } from 'react';

let pomSetting: number;
let setPomSetting: React.Dispatch<React.SetStateAction<number>>;
let longSetting: number;
let setLongSetting: React.Dispatch<React.SetStateAction<number>>;
let shortSetting: number;
let setShortSetting: React.Dispatch<React.SetStateAction<number>>;
let settingsHidden: boolean;
let setSettingsHidden: React.Dispatch<React.SetStateAction<boolean>>;
let fontSetting: 'sans' | 'serif' | 'mono';
let setFontSetting: React.Dispatch<
  React.SetStateAction<'sans' | 'serif' | 'mono'>
>;
let colorSetting: 'red' | 'blue' | 'purple';
let setColorSetting: React.Dispatch<
  React.SetStateAction<'red' | 'blue' | 'purple'>
>;
let selected: 'pomodoro' | 'long' | 'short';
let setSelected: React.Dispatch<
  React.SetStateAction<'pomodoro' | 'long' | 'short'>
>;

const AppContext = createContext({
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
});

export default AppContext;
