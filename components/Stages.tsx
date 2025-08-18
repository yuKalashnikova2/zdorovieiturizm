import TitleSection from '@/components/ui/TitleSection';
import StagesCard from './StagesCard';
import styles from './Stages.module.scss';

export default function Stages() {
  return (
    <>
      <div className={styles.stages} id="stages">
        <TitleSection>Этапы лечения в Турции</TitleSection>

        <div className="mt-20">
          <p className="services__text">
            Вы получите помощь на каждом этапе лечения, чтобы ваша поездка была
            максимальна комфортна. Начинаем с консультации, где обсудим ваши цели и
            подберём оптимальные варианты. Затем мы организуем все детали поездки,
            включая перелёт и размещение.
          </p>
        </div>

        <div className={styles.stages__wrapper}>
          <StagesCard
            title="Бесплатная"
            title2="Консультация"
            desc="Поможем выбрать лучшую клинику и врача, направляя запросы к узкопрофильным специалистам."
            color="#4245D7"
          />
          <StagesCard
            title="Связываемся c"
            title2="специалистами"
            desc="Предлагаем лучшие варианты, учитывая цены, квалификацию специалистов и ваши предпочтения."
            color="#67CFB8"
          />
          <StagesCard
            title="Организуем"
            title2="Перелёт"
            desc="После определения клиник, договариваемся о всех  моментах. От перелёта до трансфера в отель у аэропорта."
            color="#429FD7"
          />
          <StagesCard
            title="Поддержка"
            title2="24/7"
            desc="Сопровождаем на всех этапах лечения. На связи 24/7 - поможем с любыми вопросами и трудностями."
            color="#D742BC"
          />
        </div>
      </div>
    </>
  );
}
