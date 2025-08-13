import Image from "next/image";
import TitleSection from "./ui/TitleSection";
import AboutCards from "./AboutCard"
import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.about} id="about">
      <TitleSection>Почему мы?</TitleSection>

      <div className="mt-20">
        <p className="services__text">
          Мы занимаемся организацией лечения от А до Я — сделаем ваше лечение в
          Турции комфортным, чтобы вы могли не беспокоиться за качество услуг!
        </p>
      </div>

      <div className={`${styles.mobile} ${styles.mobile_margin}`}>
        <h3 className={styles.about__name}>Консультант — Эйюп Ахмет Уйгун</h3>
        <p className={styles.about__desc}>
          Опытный специалист в сфере организации оздоровительного туризма.
          Владеет турецким, английским, русским языками, жил в Турции.
        </p>
      </div>

      <div className={styles.about__wrapper}>
        <div className={styles.about__image_color}>
          <div className={styles.about__image}>
            <Image
              src="/photo.png"
              alt="Фото консультанта"
              width={500}
              height={600}
            />
          </div>
        </div>

        <div className={styles.about__text}>
          <div className={styles.desktop}>
            <h3 className={styles.about__name}>
              Консультант — Баринов Александр Владимирович
            </h3>
            <p className={styles.about__desc}>
              Опытный специалист в сфере организации оздоровительного туризма.
              Владеет турецким, английским, русским языками, жил в Турции.
            </p>
          </div>

          <div className={styles.about__cards}>
            <AboutCards
              title="0% предоплаты"
              desc="оплата только после оказанных медицинских услуг"
            />
            <AboutCards
              title="Бесплатная консультация"
              desc="профессиональные рекомендации и план лечения"
            />
            <AboutCards
              title="24/7 Помощь и гарантия"
              desc="поддержка на всех этапах лечения в Турции"
            />
            <AboutCards
              title="Поддержка после приезда"
              desc="круглосуточную помощь  после успешного лечения"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
