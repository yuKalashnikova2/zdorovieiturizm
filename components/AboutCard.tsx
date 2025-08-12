import styles from "./AboutCard.module.scss";
import Image from "next/image";

interface AboutCardProps {
  title: string;
  desc: string;
}

export default function AboutCard({ title, desc }: AboutCardProps) {
  return (
    <div className={styles["about-card"]}>
      <div className={styles["about-card__image"]}>
        <Image
          src="/about-icon.svg"
          alt="about"
          style={{ width: "100%", height: "auto" }}
          width={60}
          height={60}
        />
      </div>
      <div>
        <div className={styles["about-card__title"]}>{title}</div>
        <span className={styles["about-card__desc"]}>{desc}</span>
      </div>
    </div>
  );
}
