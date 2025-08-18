'use client';

import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  small?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ small, children, onClick, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${small ? styles.button_small : ''} ${className}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
