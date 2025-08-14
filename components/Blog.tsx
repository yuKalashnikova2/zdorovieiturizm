"use client";

import { useEffect, useState } from "react";
import TitleSection from "@/components/ui/TitleSection";
import BlogVideoCard from "./BlogVideoCard";
import BlogMobile from "./BlogMobile";
import styles from "./Blog.module.scss";

const DESKTOP_BREAKPOINT = 1460;

export default function Blog() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const set = () => setWidth(window.innerWidth);
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  return (
    <>
      <TitleSection>Наш блог</TitleSection>

      {width >= DESKTOP_BREAKPOINT ? (
        <div className={styles.blog} id="blog">
          <div className={styles["blog__wrapper-d"]}>
            <BlogVideoCard video="https://www.youtube.com/embed/KRRKdk9Jf_s?autoplay=1&mute=1" />
            <BlogVideoCard video="https://youtube.com/embed/-J48C26AM3I?autoplay=1&mute=1" />
            <BlogVideoCard video="https://youtube.com/embed/RjtwFyucTR4?autoplay=1&mute=1" />
            <BlogVideoCard video="https://youtube.com/embed/LxINvpQbYo4?autoplay=1&mute=1" />
          </div>
        </div>
      ) : (
        <BlogMobile />
      )}
    </>
  );
}
