"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleBurgerMenu = () => {
    setIsVisible((prev) => !prev);
  };

  const handleItemClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsVisible(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-logo"]}>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={120}
            height={108}
            className={styles.logoImg}
          />
        </Link>
      </div>

      <div className={styles.burger__wrapper}>
        <div className={styles.burger__header}>
          <button
            className={`${styles.burger__button} ${
              isVisible ? styles.open : ""
            }`}
            onClick={toggleBurgerMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <ul className={styles.header__menu}>
        <li className={styles["header__menu-item"]}>
          <Link href="#about">О нас</Link>
        </li>
        <li className={styles["header__menu-item"]}>
          <Link href="/services">Услуги</Link>
        </li>
        <li className={styles["header__menu-item"]}>
          <Link href="#stages">Этапы</Link>
        </li>
        <li className={styles["header__menu-item"]}>
          <Link href="#blog">Блог</Link>
        </li>
        <li className={styles["header__menu-item"]}>
          <Link href="/contacts">Контакты</Link>
        </li>
        <li className={styles["header__menu-item"]}>
          <Link href="#faq">FAQ</Link>
        </li>
      </ul>

      {isVisible && (
        <nav className={styles.burger__nav}>
          <ul className={styles.burger__list}>
            <li
              className={styles.burger__item}
              onClick={() => handleItemClick("about")}
            >
              <Link href="#about">О нас</Link>
            </li>
            <li
              className={styles.burger__item}
              onClick={() => handleItemClick("about")}
            >
              <Link href="/services">Услуги</Link>
            </li>
            <li
              className={styles.burger__item}
              onClick={() => handleItemClick("stages")}
            >
              <Link href="#stages">Этапы</Link>
            </li>
            <li
              className={styles.burger__item}
              onClick={() => handleItemClick("blog")}
            >
              <Link href="#blog">Блог</Link>
            </li>
            <li
              className={styles.burger__item}
              onClick={() => handleItemClick("stages")}
            >
              <Link href="/contacts">Контакты</Link>
            </li>
            <li
              className={styles.burger__item}
              onClick={() => handleItemClick("faq")}
            >
              <Link href="#faq">FAQ</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
