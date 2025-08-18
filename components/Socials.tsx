import Link from "next/link";
import Image from "next/image";
import styles from "./Socials.module.scss";
import { Fragment } from "react";

export default function SocialComponent() {
  return (
    <Fragment>
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
                    <Image
                      src="/youtube.svg"
                      alt="youtube"
                      width={80}
                      height={80}
                    />
                  </div>
                </Link>

                <Link
                  href="https://vk.com/zdorovekrasotaiturizm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.social__wrapper__item}>
                    <Image
                      src="/vkontakte.svg"
                      alt="vk"
                      width={80}
                      height={80}
                    />
                  </div>
                </Link>

                <Link
                  href="https://t.me/zdorovekrasotaiturizm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.social__wrapper__item}>
                    <Image
                      src="/telegram.svg"
                      alt="telegram"
                      width={80}
                      height={80}
                    />
                  </div>
                </Link>
              </div>
            </div>

            <div className={styles["social__image-background"]}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
