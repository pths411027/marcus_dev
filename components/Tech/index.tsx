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

export default function Tech() {
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const imgControls = useAnimation();
  const marginTop = useTransform(scrollY, [0, 200], [0, 200]);
  const [animationExecuted, setAnimationExecuted] = useState(false);
  const controls_ = useAnimation();
  const controls__ = useAnimation();
  const LIMIT = 200;
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > LIMIT)
      controls.start({
        x: "0",
        opacity: 1,
        transition: { duration: 0.5 },
      });
    if (latest > LIMIT && !animationExecuted) {
      imgControls.start({
        scale: [1, 30, 1],
        transition: { times: [0, 0.99, 1] },
      });
      setAnimationExecuted(true);
    }
    if (latest > LIMIT) {
      controls_
        .start({ y: "0", opacity: 1, transition: { duration: 0.5 } })
        .then(() => {
          controls__.start({
            y: "0",
            opacity: 1,
            transition: { duration: 0.5 },
          });
        });
    }
  });
  const [selected, setSelected] = useState(-1);

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.topic}
        animate={controls_}
        style={{ y: "-100%", opacity: 0 }}
      >
        <h1 className={styles.topic}>Tech Stack</h1>
      </motion.div>
      <motion.div
        layout
        className={`${styles.row_container} ${styles.tech_stack_container}`}
        style={{
          width: "100%",
          gap: "10px",
          flexWrap: "wrap",
          y: "-100%",
          opacity: 0,
          alignItems: "stretch",
        }}
        animate={controls__}
      >
        <LayoutGroup>
          {techStack.map((tech, index) => (
            <motion.div
              whileHover={{
                scaleX: 1.05,
                transformOrigin: "center",
              }}
              transition={{ duration: 0.3 }}
              layout
              onHoverStart={() => {
                setSelected(index);
                console.log("hover");
              }}
              onHoverEnd={() => {
                setSelected(-1);
              }}
              animate={{
                boxShadow:
                  index === selected ? `0 0 25px 2px ${tech.color}` : "",
                transition: { duration: 0.3 },
              }}
              key={tech.field}
              className={styles.column_container}
              style={{
                flex: "1",
                marginInline: index === selected ? "12px" : "0px",
                minWidth: "350px",
                borderRadius: "12px",
                // boxShadow:
                //   index === selected ? `0 0 25px 2px ${tech.color}` : "",

                padding: "20px",
              }}
            >
              <div
                className={styles.row_container}
                style={{ alignItems: "center" }}
              >
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
                      // boxShadow: `0 0 20px 2px ${tech.color}`,
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
                    <img
                      className={styles.fields_Img}
                      src={lang.img}
                      style={{
                        width: "24px",
                        backgroundColor: tech.background,
                        // boxShadow: `0 0 20px 2px ${tech.color}`,
                      }}
                    />
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
          ))}
        </LayoutGroup>
      </motion.div>
    </div>
  );
}
