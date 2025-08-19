import Link from "next/link"
import styles from "./Socials.module.scss"

export default function SocialComponent() {
  return (
    <>
      <div className={styles.social__border_opacity}>
        <div className={styles.social__border}>
          <div className={styles.social}>
            <div className={styles.social__block}>
              <div className={styles.social__message}>
                <p>Следите за нами в соц сетях!</p>
              </div>

              <div className={styles.social__wrapper}>
                <Link
                  href="https://www.youtube.com/@zdorovyeiturizm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.social__wrapper__item}>
                     <img src="/youtube.svg" alt="youtube" />
                  </div>
                </Link>

                <Link
                  href="https://vk.com/zdorovekrasotaiturizm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.social__wrapper__item}>
                      <img src="/vkontakte.svg" alt="youtube" />
                  </div>
                </Link>

                <Link
                  href="https://t.me/zdorovekrasotaiturizm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.social__wrapper__item}>
                    <img src="/telegram.svg" alt="youtube" />
                  </div>
                </Link>
              </div>
            </div>

            <div className={styles["social__image-background"]}></div>
          </div>
        </div>
      </div>
    </>
  );
}
