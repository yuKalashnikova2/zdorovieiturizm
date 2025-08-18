import styles from "./StagesCard.module.scss";

interface StagesCardProps {
  title: string;
  title2: string;
  desc: string;
  color: string;
}

export default function StagesCard({
  title,
  title2,
  desc,
  color,
}: StagesCardProps) {
  return (
    <>
      <div className={styles["stages-card"]}>
        <div
          className={styles["stages-card__title"]}
          style={{ backgroundColor: color }}
        >
          <h3 className={styles.desktop}>
            {title}
            <br />
            {title2}
          </h3>
          <h3 className={styles.mobile}>
            {title} {title2}
          </h3>
        </div>

        <div
          className={styles["stages-card__desc__border"]}
          style={{ backgroundColor: color }}
        >
          <div className={`${styles["stages-card__desc"]}`}>
            <div>{desc}</div>
          </div>
        </div>
      </div>
    </>
  );
}
