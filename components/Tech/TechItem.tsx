import { useState } from "react";
import styles from "./Tech.module.css";
import { jobExperience, techStack } from "../../config/text";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  LayoutGroup,
  scroll,
  useMotionValueEvent,
  useAnimation,
} from "framer-motion";
import { useEffect } from "react";

export default function TechItem({ tech, index, selected, setSelected }) {
  return (
    <motion.div
      whileHover={{
        scaleX: 1.05,
      }}
      transition={{ duration: 0.3 }}
      layout
      onHoverStart={() => setSelected(index)}
      onHoverEnd={() => setSelected(-1)}
      key={tech.field}
      className={styles.column_container}
      style={{
        flex: "1",
        marginInline: index === selected ? "12px" : "0px",
        minWidth: "350px",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: index === selected ? `0 0 25px 2px ${tech.color}` : "",
      }}
    >
      <div className={styles.row_container} style={{ alignItems: "center" }}>
        <img className={styles.fields_Img} src={tech.img} />
        <div
          className={styles.column_container}
          style={{ width: "auto", padding: "10px" }}
        >
          <div className={styles.field}>{tech.field}</div>
          <div
            className={styles.field_baseline}
            style={{
              backgroundColor: tech.color,
            }}
          />
        </div>
      </div>
      <div
        className={styles.row_container}
        style={{
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "10px",
        }}
      >
        {tech.languages.map((lang) => (
          <div
            key={lang.lang}
            className={`${styles.row_container} ${styles.lang_box}`}
            style={{
              backgroundColor: tech.color,
            }}
          >
            {/* <img
              className={styles.fields_Img}
              src={lang.img}
              style={{
                width: "24px",
                backgroundColor: tech.background,
              }}
            /> */}
            <div
              className={styles.tech_item}
              style={{
                color: "#ffffff",
              }}
            >
              {lang.lang}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
