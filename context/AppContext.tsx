import React, { createContext } from 'react';

let pomSetting: number;
let setPomSetting: React.Dispatch<React.SetStateAction<number>>;
let longSetting: number;
let setLongSetting: React.Dispatch<React.SetStateAction<number>>;
let shortSetting: number;
let setShortSetting: React.Dispatch<React.SetStateAction<number>>;
let fontSetting: 'sans' | 'serif' | 'mono';
let setFontSetting: React.Dispatch<
  React.SetStateAction<'sans' | 'serif' | 'mono'>
>;
let colorSetting: 'red' | 'blue' | 'purple';
let setColorSetting: React.Dispatch<
  React.SetStateAction<'red' | 'blue' | 'purple'>
>;

const AppContext = createContext({
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
});

export default AppContext;
