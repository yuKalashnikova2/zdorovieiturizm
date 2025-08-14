'use client';

import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  small?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ small, children, onClick }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${small ? styles.button_small : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
