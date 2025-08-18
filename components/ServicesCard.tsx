"use client";

import { FC } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import styles from "./ServicesCard.module.scss";

interface ServicesCardProps {
  title: string;
  desc: string;
  borderColor: "1" | "2" | "3" | "4";
  backgroundImage: string;
  link?: string;
  openModal?: (modal: string) => void;
}

const ServicesCard: FC<ServicesCardProps> = ({
  title,
  desc,
  borderColor,
  backgroundImage,
  link,
  openModal,
}) => {
  return (
    <div
      className={`${styles["services-card_border-opacity_br"]} ${
        styles[`services-card_border-opacity-${borderColor}`]
      }`}
    >
      <div
        className={`${styles["services-card_border"]} ${styles["services-card_border-opacity"]}`}
      >
        <div
          className={styles["services-card"]}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h3 className={styles["services-card__title"]}>{title}</h3>
          <div className={styles["services-card__desc"]}>{desc}</div>

          {link ? (
            <Link href={`/services/${link}`} passHref>
              <Button small className={styles["services-card__button"]}>
                Узнать
              </Button>
            </Link>
          ) : (
            <div onClick={() => openModal?.("card")}>
              <Button small className={styles["services-card__button"]}>
                Узнать
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
