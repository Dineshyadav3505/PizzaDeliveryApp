'use client';
import React from 'react'
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeSwitcher;