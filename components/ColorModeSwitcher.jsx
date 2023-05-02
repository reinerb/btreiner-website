import React from 'react';
import { useTheme } from 'next-themes';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ColorModeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <FontAwesomeIcon
      icon={currentTheme === 'light' ? faSun : faMoon}
      onClick={() =>
        currentTheme === 'light' ? setTheme('dark') : setTheme('light')
      }
    />
  );
};

export default ColorModeSwitcher;
