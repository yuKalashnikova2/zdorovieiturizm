"use client";

import { useState } from "react";
import useModal from "@/hooks/useModal";
import styles from "./Modal.module.scss";
import Button from "./Button";

export default function Modal() {
  const {
    modalClosed,
    isThanks,
    closeModal,
    submitForm,
    errorName,
    errorEmail,
    errorPhone,
  } = useModal();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm(name, email, phone);
  };

  return (
    <div
      id="overlay_button"
      className={`${styles.modal} modal`}
      style={{ display: modalClosed ? "flex" : "none" }}
      onClick={closeModal}
    >
      <div className={styles["modal__wrapper"]}>
        <div className={styles["modal__border_opacity"]}>
          <div className={styles["modal__border"]}>
            <div className={styles["modal__inner"]}>
              {!isThanks ? (
                <>
                  <h3 className={`${styles["modal__title"]} ${styles.desktop}`}>
                    Заявка на бесплатную консультацию
                  </h3>

                  <div className={styles.mobile}>
                    <h3 className={styles["modal__title"]}>
                      Заявка на бесплатную консультацию
                    </h3>
                    <div
                      onClick={closeModal}
                      className={`${styles["modal__closed"]} modal__closed`}
                    >
                      &#10005;
                    </div>
                  </div>

                  <form className={styles["modal__form"]} onSubmit={onSubmit}>
                    <div className={styles["modal__form__inputs"]}>
                      <div className={styles["modal__form__input"]}>
                        <label htmlFor="name">
                          Как вас зовут?
                          {errorName && <span style={{ color: "red" }}>*</span>}
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Ваше имя"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>

                      <div className={styles["modal__form__input"]}>
                        <label htmlFor="email">
                          Ваш email
                          {errorEmail && (
                            <span style={{ color: "red" }}>*</span>
                          )}
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="example@domain.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className={styles["modal__form__input"]}>
                        <label htmlFor="phone">
                          Телефон
                          {errorPhone && (
                            <span style={{ color: "red" }}>*</span>
                          )}
                        </label>

                        {errorPhone && (
                          <span style={{ color: "red" }}>
                            Тeлефон должен быть в формате +7 XXX XXX XX XX и не
                            может быть пустым
                          </span>
                        )}

                        <input
                          type="text"
                          id="phone"
                          placeholder="+7 900 900 99-55"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div onClick={(e) => onSubmit(e)}>
                      <Button className={styles["modal__btn"]} >
                        Отправить
                      </Button>
                    </div>

                    <div className={styles["modal__agree"]}>
                      <span>
                        Нажимая на&nbsp;кнопку, я соглашаюсь на&nbsp;
                        <span className={styles["modal__agree_underline"]}>
                          обработку персональных данных.
                        </span>
                      </span>
                    </div>
                  </form>
                </>
              ) : (
                <div className={styles["modal__thanks"]}>
                  <h3 className={styles["modal__thanks__title"]}>Спасибо!</h3>
                  <span className={styles["modal__thanks__subtitle"]}>
                    Мы свяжемся с вами в ближайшее время!
                  </span>
                  <span className={styles["modal__thanks__follow"]}>
                    Следите за нами в соц сетях!
                  </span>

                  <div className={styles["modal__social"]}>
                    <a
                      href="https://www.youtube.com/@zdorovyeiturizm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className={styles["modal__social__item"]}>
                        <img src="/youtube.svg" alt="youtube" />
                      </div>
                    </a>

                    <a
                      href="https://vk.com/zdorovekrasotaiturizm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className={styles["modal__social__item"]}>
                        <img src="/vkontakte.svg" alt="vk" />
                      </div>
                    </a>

                    <a
                      href="https://t.me/zdorovekrasotaiturizm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className={styles["modal__social__item"]}>
                        <img src="/telegram.svg" alt="telegram" />
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
