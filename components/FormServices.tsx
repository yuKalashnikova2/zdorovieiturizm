"use client";

import Button from "./ui/Button";
import LabelPrice from "@/components/LabelPrice";
import useModal from "@/hooks/useModal";
import styles from "./FormServices.module.scss";

type FormProps = {
  backgroundImage: string;
};

export default function Form({ backgroundImage }: FormProps) {
  const { openModal } = useModal();

  return (
    <div
      className={styles.form__services}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.form__services__title}>
        Запишись на бесплатную консультацию до конца осени!
      </div>

      <span className={`${styles.form__services__subtitle} mt-20`}>
        мы подберём лучшее решение и ответим на все вопросы!
      </span>

      <Button
        onClick={() => openModal("banner")}
        className={styles.form__services__btn}
      >
        Записаться
      </Button>

      <div className={`${styles.form__services__labels} mobiles`}>
        <LabelPrice
          small
          colorGray
          whiteShadow
          withAuto
          price="0 руб."
          text="Предоплаты"
          color="rgba(255, 255, 255, 0.8)"
        />
        <LabelPrice
          small
          colorGray
          whiteShadow
          withAuto
          price="Онлайн"
          text="Поддержка"
          color="rgba(255, 255, 255, 0.8)"
        />
        <LabelPrice
          small
          colorGray
          withAuto
          price="100%"
          text="Гарантия"
          color="rgba(255, 255, 255, 0.8)"
        />
      </div>
    </div>
  );
}
