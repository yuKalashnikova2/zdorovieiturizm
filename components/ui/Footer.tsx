"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={`${styles.footer__menu} ${styles["d-none"]}`}>
        <li className={styles.footer__menuItem}>
          <Link href="#about">О нас</Link>
        </li>
        <li className={styles.footer__menuItem}>
          <Link href="#services">Услуги</Link>
        </li>
        <li className={styles.footer__menuItem}>
          <Link href="#stages">Этапы</Link>
        </li>
        <li className={styles.footer__menuItem}>
          <Link href="#blog">Блог</Link>
        </li>
        <li className={styles.footer__menuItem}>
          <Link href="#contacts">Контакты</Link>
        </li>
        <li className={styles.footer__menuItem}>
          <Link href="#faq">FAQ</Link>
        </li>
      </ul>

      <span className={styles.footer__copyright}>
        © 2025 Лечение в Турции | Баринов Александр Владимирович
      </span>
    </div>
  );
}
