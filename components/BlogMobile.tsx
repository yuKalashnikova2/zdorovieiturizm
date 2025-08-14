"use client";

import BlogVideoCard from "./BlogVideoCard";
import styles from "./BlogMobile.module.scss";

export default function BlogMobile() {
  return (
    <div className={styles["blog__wrapper"]}>
      <div className={styles["blog__video-container"]}>
        <BlogVideoCard video="https://www.youtube.com/embed/KRRKdk9Jf_s?autoplay=1&mute=1" />
        <BlogVideoCard video="https://youtube.com/embed/-J48C26AM3I?autoplay=1&mute=1" />
        <BlogVideoCard video="https://youtube.com/embed/RjtwFyucTR4?autoplay=1&mute=1" />
        <BlogVideoCard video="https://youtube.com/embed/LxINvpQbYo4?autoplay=1&mute=1" />
      </div>
    </div>
  );
}
