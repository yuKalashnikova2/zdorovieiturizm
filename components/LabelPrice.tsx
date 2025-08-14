'use client'
import React, { FC } from 'react';
import styles from './LabelPrice.module.scss';

interface LabelPriceProps {
  price: string;
  text: string;
  color: string;
  small?: boolean;
  whiteShadow?: boolean;
  colorGray?: boolean;
  withAuto?: boolean;
}

const LabelPrice: FC<LabelPriceProps> = ({
  price,
  text,
  color,
  small = false,
  whiteShadow = false,
  colorGray = false,
  withAuto = false,
}) => {
  return (
    <div
      className={`${styles.label} ${whiteShadow ? styles.label_shadowWhite : ''} ${colorGray ? styles.label_colorGray : ''} ${withAuto ? styles.label_maxWidthAuto : ''}`}
      style={{ backgroundColor: color }}
    >
      <span className={`${styles.label__price} ${small ? styles.label__price_small : ''}`}>
        {price}
      </span>
      <span className={styles.label__text}>{text}</span>
    </div>
  );
};

export default LabelPrice;
