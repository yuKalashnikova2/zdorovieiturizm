"use client";

import Image from "next/image";
import Link from "next/link";
import ContactsCard from "./ContactsCard";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  return (
    <div className={styles.contacts__border_opacity}>
      <div className={styles.contacts__border}>
        <div className={styles.contacts} id="contacts">
          <div className={styles.contacts__message}>
            <h3 className={styles.contacts__title}>
              Остались вопросы? Напишите нам!
            </h3>
            <div className={styles.contacts__subtitle}>
              Получите все ответы прямо сейчас!
            </div>
          </div>

          <div className={styles.contacts__form}>
            <ContactsCard
              icon="/phone.svg"
              subtitle="Телефон:"
              name="+7 925 499 45 61"
              href="tel:+79254994561"
            />
            <ContactsCard
              icon="/email.svg"
              subtitle="Email:"
              name="zdorovye.turizm@bk.ru"
              href="mailto:zdorovye.turizm@bk.ru"
            />
          </div>

          <div className={styles.contacts__wrapper}>
            <Link href="https://wa.me/79254994561" target="_blank">
              <div className={styles.contacts__wrapper__item}>
                <Image src="/whats.svg" alt="whats" width={60} height={60} />
              </div>
            </Link>

            <Link
              href="https://www.youtube.com/@zdorovyeiturizm"
              target="_blank"
            >
              <div className={styles.contacts__wrapper__item}>
                <Image
                  src="/youtube.svg"
                  alt="youtube"
                  width={60}
                  height={60}
                />
              </div>
            </Link>

            <Link href="https://vk.com/zdorovekrasotaiturizm" target="_blank">
              <div className={styles.contacts__wrapper__item}>
                <Image src="/vkontakte.svg" alt="vk" width={60} height={60} />
              </div>
            </Link>

            <Link href="https://t.me/zdorovekrasotaiturizm" target="_blank">
              <div className={styles.contacts__wrapper__item}>
                <Image
                  src="/telegram.svg"
                  alt="telegram"
                  width={60}
                  height={60}
                />
              </div>
            </Link>
          </div>

          <div className={styles.contacts__image_background}></div>
        </div>
      </div>
    </div>
  );
}
