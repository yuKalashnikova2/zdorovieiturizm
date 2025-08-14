import styles from "./BlogVideoCard.module.scss";

interface BlogVideoCardProps {
  video: string;
}

export default function BlogVideoCard({ video }: BlogVideoCardProps) {
  return (
    <div className={styles.video}>
      <iframe
        width="405"
        height="615"
        src={video}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
