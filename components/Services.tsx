'use client';

import React from 'react';
import TitleSection from './ui/TitleSection';
import ServicesCard from './ServicesCard';
import styles from './Services.module.scss';

export default function Services() {
  return (
    <div className={styles.services} id="services">
      <TitleSection>Наши услуги</TitleSection>
      <div className="mt-20">
        <p className="services__text">
          Мы предлагаем услуги по пересадке волос, неврологии и хирургии,
          стоматологические услуги и пластические операции в Турции. Наши
          партнёры — это только проверенные клиники и опытные врачи.
        </p>
      </div>

      <div className={styles.services__wrapper}>
        <ServicesCard
          title="Пересадка волос"
          desc="Современные методы Саппфир FUE и DHI"
          borderColor="1"
          backgroundImage="/p-1.JPG"
          link="hairtransplant"
        />
        <ServicesCard
          title="Неврология и хирургия"
          desc="Лечение грыжи и болей без операции"
          borderColor="2"
          backgroundImage="/p-2.JPG"
          link="herniatreatment"
        />
        <ServicesCard
          title="Лечение зубов"
          desc="Импланты, виниры, коронки, отбеливание"
          borderColor="3"
          backgroundImage="/p-3.png"
        />
        <ServicesCard
          title="Эстетическая медицина"
          desc="Пластические операции, липосакция"
          borderColor="4"
          backgroundImage="/p-4.png"
        />
      </div>
    </div>
  );
}
