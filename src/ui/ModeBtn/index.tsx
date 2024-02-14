'use client'

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ModeBtn() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={theme === 'dark' ? () => setTheme('light') : () => setTheme('dark')}
      className="flex items-center justify-center w-10 h-10 p-1 rounded-1 bg-ballena dark:bg-arroz"
    >
      {theme === 'dark' ? (
        <SunIcon className="w-6 h-6 text-ballena" />
      ) : (
        <MoonIcon className="w-6 h-6 text-arroz" />
      )}
    </button>
  )
}
