import styles from './TitleSection.module.scss'

export default function TitleSection({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.titleSection}>{children}</h2>;
}
