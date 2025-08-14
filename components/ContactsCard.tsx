"use client";

import Image from "next/image";
import styles from "./ContactsCards.module.scss";

interface ContactsCardProps {
  icon: string;
  subtitle: string;
  name: string;
  href: string;
}

export default function ContactsCard({
  icon,
  subtitle,
  name,
  href,
}: ContactsCardProps) {
  return (
    <div className={styles.contacts__phone}>
      <div className={styles.contacts__phone__icon}>
        <Image src={icon} alt={name} width={40} height={40} />
      </div>
      <div className={styles.contacts__phone__wrapper}>
        <span className={styles.contacts__phone__subtitle}>{subtitle}</span>
        <a href={href} className={styles.contacts__phone__name}>
          {name}
        </a>
      </div>
    </div>
  );
}
