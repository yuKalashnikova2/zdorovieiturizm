"use client";

import { FC } from "react";
import styles from "./Banner.module.scss";
import useModal from "@/hooks/useModal";
import LabelPrice from "@/components/LabelPrice";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

const Banner: FC = () => {
  const { openModal } = useModal();

  return (
    <div className={styles.banner}>
      <div className={styles.banner__block}>
        <h1 className={styles.banner__title}>
          Лечебный отпуск
          <br />
          в Турцию
        </h1>
        <div className={styles.banner__block__subtitle}>
          подберём лучшую клинику по вашим критериям
        </div>

        <div className={`${styles.banner__labels} ${styles.desktop}`}>
          <LabelPrice price="0 руб." text="Предоплаты" color="#4245D7" />
          <LabelPrice price="Онлайн" text="Поддержка" color="#429FD7" small />
          <LabelPrice price="100%" text="Гарантия" color="#67CFB8" />
        </div>
      </div>

      <div className={`${styles.banner__labels} ${styles.mobiles}`}>
        <LabelPrice price="0 руб." text="Предоплаты" color="#4245D7" />
        <LabelPrice price="Онлайн" text="Поддержка" color="#429FD7" small />
        <LabelPrice price="100%" text="Гарантия" color="#67CFB8" />
      </div>

      <div className={styles.banner__form}>
        <div className={styles.banner__form__wrapper}>
          <div className={styles.banner__form__title}>
            Запишись на бесплатную консультацию до конца осени!
          </div>
          <span className={styles.banner__form__subtitle}>
            мы подберём лучшее решение и ответим на все вопросы!
          </span>
          <Button onClick={() => openModal('banner')}>Записаться</Button>
        </div>
      </div>

      <Modal />
    </div>
  );
};

export default Banner;
