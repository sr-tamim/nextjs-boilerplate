'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <label onClick={() => setTheme('light')}>Light</label>
      <label onClick={() => setTheme('dark')}>Dark</label>
      <label onClick={() => setTheme('system')}>System</label>
    </div>
  );
}
