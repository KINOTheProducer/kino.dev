'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/Button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() =>
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }
    >
      {theme === 'dark' ? <Moon /> : <Sun />}
    </Button>
  );
}
