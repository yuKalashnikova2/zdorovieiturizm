"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Question.module.scss";

interface Info {
  description?: string;
  titleP?: string;
  paragrath?: string;
  titleP2?: string;
  paragrath2?: string;
  titlePoints?: string;
  points?: string[];
}

interface QuestionProps {
  title?: string;
  info?: Info;
}

export default function Question({
  title = "Тема вопроса",
  info = {},
}: QuestionProps) {
  const [expanded, setExpanded] = useState(false);

  const contentStyle: React.CSSProperties = {
    maxHeight: expanded ? 350 : 0,
    overflow: "hidden",
    transition: "max-height 0.2s ease-out",
  };

  const infoStyle: React.CSSProperties = {
    opacity: expanded ? 1 : 0,
    transition: "opacity 0.3s ease-out",
  };

  return (
    <article className={styles.question}>
      <header>
        <div
          className={`${styles.question__arrow} ${
            expanded ? styles.question__arrow__open : ""
          }`}
          onClick={() => setExpanded(!expanded)}
        >
          <Image src="/downarrow.svg" alt="" width={60} height={60} />
        </div>
        <h3
          className={styles.question_title}
          onClick={() => setExpanded(!expanded)}
        >
          {title}
        </h3>
      </header>

      <div className={styles.content} style={contentStyle}>
        {info.description && (
          <p className={styles.info} style={infoStyle}>
            {info.description}
          </p>
        )}

        {(info.titleP || info.titleP2) && (
          <div className={styles.info__paragrath}>
            {info.titleP && (
              <div>
                <p className={styles.info} style={infoStyle}>
                  {info.titleP}
                </p>
                <div className={styles.info} style={infoStyle}>
                  {info.paragrath}
                </div>
              </div>
            )}
            {info.titleP2 && (
              <div>
                <p className={styles.info} style={infoStyle}>
                  {info.titleP2}
                </p>
                <div className={styles.info} style={infoStyle}>
                  {info.paragrath2}
                </div>
              </div>
            )}
          </div>
        )}

        {info.points && info.points.length > 0 && (
          <ul className={styles.info__list}>
            {info.titlePoints && (
              <li className={styles.info}>{info.titlePoints}</li>
            )}
            {info.points.map((point, index) => (
              <li key={index} className={styles.info__li}>
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
